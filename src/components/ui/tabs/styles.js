import styled from "styled-components";

const TabList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const TabButton = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.family};
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) =>
    props.active
      ? props.theme.colors.text.inverted
      : props.theme.colors.text.primary};
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.button.secondary
      : props.theme.colors.gray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
`;

const TabPanel = styled.div`
  height: ${(props) => props.$maxContentHeight || "auto"};
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: auto;
  scrollbar-width: thin;
  font-size: 14px;
`;

export { TabList, TabButton, TabPanel };
