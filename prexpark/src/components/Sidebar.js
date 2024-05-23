import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Prexpark</h1>
        <span>John Doe</span>
      </div>
      <nav className="sidebar-nav">
        <a href="#dashboard">Dashboard</a>
        <a href="#real-time-monitor">Real-time Monitor</a>
        <a href="#traffic-activity">Traffic Activity</a>
        <a href="#revenue">Revenue</a>
        <a href="#visitors">Visitors</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
