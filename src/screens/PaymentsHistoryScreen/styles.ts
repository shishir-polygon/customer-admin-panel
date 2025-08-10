import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IPaymentStatusProps {
  isPaid: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 40px;
`;

export const PaymentsList = styled.div`
  max-height: calc(100vh - 150px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    margin-right: 5px;
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${colors.ALABASTER};
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.KILLARNEY};
    border-radius: 10px;
  }
`;

export const Payment = styled.div`
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background: ${colors.WHITE};
  border-bottom: 1px solid ${colors.GALLERY};
`;

export const PaymentStatus = styled.span<IPaymentStatusProps>`
  position: relative;
  width: 80px;

  &:before {
    position: absolute;
    content: "";
    top: 7px;
    left: -10px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ isPaid }) => (isPaid ? colors.JADE : colors.SCARLET)};
  }
`;
