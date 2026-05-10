import React, { useEffect } from "react";

export default function AdBanner() {
  useEffect(() =>
   {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } 
    catch (e) {}
  }
  , []);

  return (

    <ins
      className="adsbygoogle"
      style = {{ display: 'block' }}
      data-ad-client="ca-pub-7541780444716686"
      data-ad-slot="1326916344"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />

  );
}
