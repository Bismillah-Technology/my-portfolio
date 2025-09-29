// src/components/AppsList.jsx
import React from "react";
import { motion } from "framer-motion";
import apps from "../data/appsData";

export default function AppsList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app, i) => (
        <motion.div
          key={app.id}
          className="bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.5 }}
        >
          <a
            href={`https://play.google.com/store/apps/details?id=${app.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-4"
          >
            {/* App Icon */}
            <img
              src={app.icon}
              alt={app.name}
              className="w-14 h-14 rounded-xl object-cover shadow-md"
            />

            {/* App Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                {app.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{app.shortDesc}</p>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
