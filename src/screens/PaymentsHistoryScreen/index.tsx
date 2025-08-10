import { FC } from "react";

import { paymentHistory } from "./data";
import IPaymentsHistoryScreenProps from "./props";
import { Payment, PaymentsList, PaymentStatus, Wrapper } from "./styles";
import { Heading, SmoothEffect, Text } from "../../components";

export const PaymentsHistoryScreen: FC<IPaymentsHistoryScreenProps> = () => (
  <SmoothEffect>
    <Wrapper>
      <Heading bolder text="Payments History" textAlign="left" />
      <PaymentsList>
        {paymentHistory.map((p) => (
          <Payment key={p.id}>
            <Text fontWeight="normal" fontSize={14}>
              {p.name}
            </Text>
            <Text fontWeight="normal" fontSize={14}>
              {p.time}
            </Text>
            <Text fontWeight="normal" fontSize={14}>
              {p.method}
            </Text>
            <PaymentStatus isPaid={p.status}>
              {p.status ? "Paid" : "Falled"}
            </PaymentStatus>
            <Text fontWeight="normal" fontSize={14}>
              £{p.sum}
            </Text>
          </Payment>
        ))}
      </PaymentsList>
    </Wrapper>
  </SmoothEffect>
);
