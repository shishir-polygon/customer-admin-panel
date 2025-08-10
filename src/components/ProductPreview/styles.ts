import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IDiscountPriseProps {
  alignItems?: "flex-start" | "flex-end";
}

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductIngredients = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
`;

export const Description = styled.p`
  width: 100%;
  padding: 10px 0;
  font-family: "Helvetica Now Display";
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  border-top: 1px solid ${colors.WILD_SAND};
  border-bottom: 1px solid ${colors.WILD_SAND};
`;

export const DiscountPriseBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid ${colors.WILD_SAND};
`;

export const DiscountPrise = styled.div<IDiscountPriseProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems = "flex-start" }) => alignItems};
`;
