import styled from "styled-components";

const SpecList = styled.dl`
  display: flex;
  flex-direction: column;
  gap 8px;
`;

const SpecTitle = styled.dt`
  display: inline;
  font-weight: 700;
`;

const SpecValue = styled.dd`
  display: inline;
  margin: 0;
`;

export { SpecList, SpecTitle, SpecValue };
