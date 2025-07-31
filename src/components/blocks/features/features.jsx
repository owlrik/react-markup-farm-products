import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import FeaturesList from "../features-list/features-list";
import { ContentWrapper, ListWrapper } from "./styles";

function Features({ features, level }) {
  let farmList = [];
  let storeList = [];

  features.forEach((feature) => {
    if (feature.type === "farm") {
      farmList.push(feature);
    } else {
      storeList.push(feature);
    }
  });

  return (
    <section>
      <ContentWrapper>
        <Title as={"h2"} size={TitleSize.MEDIUM}>
          Почему фермерские продукты лучше?
        </Title>

        <ListWrapper>
          <FeaturesList features={farmList} />
          <FeaturesList features={storeList} />
        </ListWrapper>

        <div>
          <Button minWidth={260} link={"/buy"}>
            Купить
          </Button>
        </div>
      </ContentWrapper>
    </section>
  );
}

export default Features;
