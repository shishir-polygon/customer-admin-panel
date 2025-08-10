import styled from "styled-components";
interface IStepProps {
  isCuisinesStep?: boolean;
}

export const Wrapper = styled.div<IStepProps>`
  ${({ isCuisinesStep }) =>
    isCuisinesStep ? "padding: 0 90px;" : "max-width: 880px;"}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameFieldWrapper = styled.div`
  width: 100%;
  max-width: 470px;
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  display: flex;
`;
