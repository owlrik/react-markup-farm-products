import React from "react";
import { SpecList, SpecTitle, SpecValue } from "./styles";
import SafeHtml from "../../utils/safe-html/safe-html";

function OptionList({ list = [], delimeter = ": " }) {
  return list.length > 0 ? (
    <SpecList>
      {list.map((option, index) => (
        <div key={`tab-${index}`}>
          <SpecTitle>
            {option.property}
            {delimeter}
          </SpecTitle>
          <SafeHtml tag={SpecValue} html={option.value}></SafeHtml>
        </div>
      ))}
    </SpecList>
  ) : null;
}

export default OptionList;
