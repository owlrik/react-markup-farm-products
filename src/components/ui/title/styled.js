import styled from "styled-components";
import {TitleSize} from "./title";

const StyledTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: ${(props) => {
        switch (props.$size) {
            case TitleSize.BIG:
                return "44px";
            case TitleSize.MEDIUM:
                return "36px";
            case TitleSize.SMALL:
                return "32px";
            case TitleSize.TINY:
                return "24px";
            default:
                return "18px";
        }
    }};
    line-height: 1.15;
`;

export {StyledTitle};
