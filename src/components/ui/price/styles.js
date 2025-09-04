import styled from "styled-components";

const StyledPrice = styled(P)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Value = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
`;

export { StyledPrice, Text, Value };
