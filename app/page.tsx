"use client";

import React, { useState } from "react";
import Drawer from "./components/Drawer/Drawer";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      {/* Button mở Drawer */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsDrawerOpen(true)}
      >
        Open Drawer
      </button>

      {/* Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Drawer Content</h2>
          <p>This is the drawer content.</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
            onClick={() => setIsDrawerOpen(false)}
          >
            Close Drawer
          </button>
        </div>
      </Drawer>
    </div>
  );
}
