"use client";

import React, { useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import Button from "./components/Button/Button";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-lg font-bold">Drawer Content</h2>
          <p>This is the drawer content.</p>
          <Button variant="warning" onClick={() => setIsDrawerOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
