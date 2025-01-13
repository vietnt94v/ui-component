"use client";
import React, { useState } from "react";
import Drawer from "../components/Drawer/Drawer";
import Button from "../components/Button/Button";

const ComponentList = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ul className="container">
        <li>
          <h3>Drawer</h3>
          <div>
            <button onClick={() => setDrawerOpen(true)}>Show drawer</button>
            <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
              <div className="px-3">
                <p>Drawer content</p>
                <Button onClick={() => setDrawerOpen(false)}>Close</Button>
              </div>
            </Drawer>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ComponentList;
