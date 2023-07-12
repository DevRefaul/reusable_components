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
      {activeTab === "Home" ? <div>This is the home tab content</div> : <></>}
      {activeTab === "About" ? <div>This is the About tab content</div> : <></>}
      {activeTab === "Contact" ? (
        <div>This is the Contact tab content</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tabs;
