import styled from "styled-components";

import { colors } from "../../utils/colors";

interface ITextareaWrapperProps {
  marginBottom?: number;
  width?: string;
}

export const TextareaWrapper = styled.div<ITextareaWrapperProps>`
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  width: ${({ width = "100%" }) => width};
  display: flex;
  flex-direction: column;
`;

export const TextField = styled.textarea`
  border: 1px solid ${colors.VISTA_BLUE}4D;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px ${colors.ALTO}1F;
  border-radius: 15px;
  resize: none;
  height: 190px;
  padding: 20px 30px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.DOVE_GRAY};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.DOVE_GRAY}71;
    font-size: 17px;
  }
`;
