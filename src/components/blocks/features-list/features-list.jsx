import React from "react";
import FeatureCard from "../../ui/feature-card/feature-card";

function FeaturesList({features}) {
    return (
        features?.length ? (
            <ul className="features__list">
                {features.map((feature) => (
                    <li className="features__item" key={feature.id}>
                        <FeatureCard {...feature} />
                    </li>
                ))}
            </ul>
        ) : null
    );
}

export default FeaturesList;
