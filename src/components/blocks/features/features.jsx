import React from "react";
import Title, {TitleSize} from "../../ui/title/title";
import Button from "../../ui/button/button";
import FeaturesList from "../features-list/features-list";

function Features({features, level}) {
    let farmList = [];
    let storeList = [];

    features.forEach((feature) => {
        if (feature.type === 'farm') {
            farmList.push(feature);
        } else {
            storeList.push(feature);
        }
    });

    return (
        <section className="features">
            <div className="features__inner">
                <Title level={level} size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>

                <div className="features__list-wrap">
                    <FeaturesList features={farmList} />
                    <FeaturesList features={storeList} />
                </div>

                <div className="features__btn-wrap">
                    <Button minWidth={260} link={"/buy"}>Купить</Button>
                </div>
            </div>
        </section>
    );
}

export default Features;
