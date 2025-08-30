import React from "react";

function SafeHtml({ html, tag = "span", ...props }) {
  const Tag = tag;
  return <Tag dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

export default SafeHtml;
