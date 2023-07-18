import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab = String, setActiveTab] = useState<String>("Home")
  const tabs = [
    { label: "Home", content: "This is the home tab" },
    { label: "Products", content: "This is the products tab" },
    { label: "About", content: "This is the about tab" },
    { label: "Contact", content: "This is the contact tab" },
  ];

  return (
    <div>
      {/* tabs */}
      <div className="flex justify-between bg-yellow-50 p-4">
        <h2 className="text-lg font-semibold">RUTABS</h2>
        <ul className="flex justify-between">
          {tabs.map((tab, index) => (
            <li className="px-2" key={index}>
              <button
                onClick={() => setActiveTab(tab.label)}
                className={activeTab === tab.label ? "active" : ""}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* tabs */}
      {activeTab === "Home" ? <div>This is the home tab content</div> : <></>}
      {activeTab === "Products" ? (
        <div>This is the home products content</div>
      ) : (
        <></>
      )}
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