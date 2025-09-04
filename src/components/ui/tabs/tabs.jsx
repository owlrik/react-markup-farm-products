import React from "react";
import { useState } from "react";
import { TabList, TabButton, TabPanel } from "./styles";

function Tabs({ tabs, maxContentHeight }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TabButton
                  key={item.title}
                  className="tabs__btn"
                  type="button"
                  active
                >
                  {item.title}
                </TabButton>
              );
            }
            return (
              <TabButton
                key={item.title}
                className="tabs__btn"
                type="button"
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </TabButton>
            );
          })}
      </TabList>

      <div>
        <TabPanel $maxContentHeight={maxContentHeight}>
          {tabs[activeTab].content}
        </TabPanel>
      </div>
    </div>
  );
}

export default Tabs;
