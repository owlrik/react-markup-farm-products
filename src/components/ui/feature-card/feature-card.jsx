import React from "react";
import Title from "../../ui/title/title";

function FeatureCard({
    type,
    title,
    description,
    image,
 }) {
    return (
        <div className="feature-card">
            <div className="feature-card__header">
                <img
                    className="feature-card__icon"
                    src={image}
                    width="56"
                    height="56"
                    alt="Иконка"
                />
                <span className="feature-card__label">{`${type === "farm" ? "Фермерские продукты" : "Магазинные продукты"}`}</span>
                <Title level="3">{title}</Title>
            </div>
            <div className="feature-card__description">
                <p>
                    dangerouslySetInnerHTML={{__html: description}}
                </p>
            </div>
        </div>
    );
}

export default FeatureCard;
