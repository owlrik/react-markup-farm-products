import React from "react";
import FeatureCard from "../../ui/feature-card/feature-card";
import { TitleLevel, TitleSize } from "../../ui/title/title";
import "./style.css";

function FeaturesList({ features }) {
  return features?.length ? (
    <ul className="features__list">
      {features.map((feature) => (
        <li className="features__item" key={feature.id}>
          <FeatureCard level={TitleLevel.H2} {...feature} />
        </li>
      ))}
    </ul>
  ) : null;
}

export default FeaturesList;
