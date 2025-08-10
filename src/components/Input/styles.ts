import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IFieldWrapperProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  width?: string;
}

interface IInputField {
  isSearch?: boolean;
  borderRadius?: number;
  color?: string;
  height?: number;
  placeholderOnCenter?: boolean;
  paddingLeft?: number;
}

export const FieldWrapper = styled.div<IFieldWrapperProps>`
  margin-bottom: ${({ marginBottom = 30 }) => marginBottom}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  width: ${({ width = "100%" }) => width};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input<IInputField>`
  border-radius: ${({ borderRadius = 100 }) => borderRadius}px;
  padding-left: ${({ paddingLeft = 26 }) => paddingLeft}px;
  ${({ isSearch }) => isSearch && `padding-left: 26px;`};
  color: ${({ color = colors.DOVE_GRAY }) => color};
  border: 1px solid ${colors.KILLARNEY}26;
  height: ${({ height = 44 }) => height}px;
  outline: none;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;

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

  ${({ placeholderOnCenter }) =>
    placeholderOnCenter &&
    `
    text-align: center;
    padding-left: 0;

    ::-webkit-input-placeholder {
      text-align: center;
    }
   
    :-moz-placeholder { 
      text-align: center;  
    }
   
    ::-moz-placeholder {  
      text-align: center;  
    }
   
    :-ms-input-placeholder {  
      text-align: center; 
    }
  `}
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;
