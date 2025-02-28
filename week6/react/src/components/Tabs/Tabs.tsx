import React, { useState } from "react";
import { tabMock } from "./Tabs.mock";
import styles from './Tabs.module.css'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [disableInputTab, setDisableInputTab] = useState("");
  const [omitInputTab, setOmitInputTab] = useState("");

  const activeTabContent = tabMock.find((tab) => tab.id === activeTab);
  return (
    <div>
      {tabMock.map((tab) => {
        return (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            disabled={tab.id === disableInputTab}
            className={tab.id === omitInputTab ? styles.hideTab: ""}
          >
            {tab.tabName}
          </button>
        );
      })}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {activeTabContent?.content.map((item, index) => {
          return <div key={index + item}>{item}</div>;
        })}
      </div>
      <input
        type="text"
        placeholder="disable tab"
        onChange={(e) => {
          setDisableInputTab(e.target.value);
        }}
      />
       <input
        type="text"
        placeholder="omit tab"
        onChange={(e) => {
          setOmitInputTab(e.target.value);
        }}
      />
    </div>
  );
};
