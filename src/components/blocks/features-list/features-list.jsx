import React from "react";
import FeatureCard from "../../ui/feature-card/feature-card";
import { StyledFeaturesList } from "./styles";

function FeaturesList({ features }) {
  return features?.length ? (
    <StyledFeaturesList>
      {features.map((feature) => (
        <li key={feature.id}>
          <FeatureCard {...feature} />
        </li>
      ))}
    </StyledFeaturesList>
  ) : null;
}

export default FeaturesList;
