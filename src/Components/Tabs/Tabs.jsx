import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = [
    { label: "Home", content: "This is the home tab" },
    { label: "About", content: "This is the about tab" },
    { label: "Contact", content: "This is the contact tab" },
  ];

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveTab(tab.label)}
              className={activeTab === tab.label ? "active" : ""}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className={activeTab === "Home" ? "active" : ""}>
        This is the home tab content
      </div>
      <div className={activeTab === "About" ? "active" : ""}>
        This is the about tab content
      </div>
      <div className={activeTab === "Contact" ? "active" : ""}>
        This is the contact tab content
      </div>
    </div>
  );
};

export default Tabs;
