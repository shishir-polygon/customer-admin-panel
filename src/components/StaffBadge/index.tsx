import { FC } from "react";

import IStaffBadgeProps from "./props";
import { Badge, BadgeText, RemoveWorker } from "./styles";
import { Img, Text } from "..";
import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

export const StaffBadge: FC<IStaffBadgeProps> = ({
  worker,
  isGeneralManager,
  onRemoveWorker,
}) => (
  <>
    <Badge isGeneralManager={isGeneralManager}>
      <Img
        src={IMAGES.MANAGER}
        width={24}
        height={24}
        marginRight={15}
        marginLeft={15}
      />
      <BadgeText>
        <Text fontWeight="500" fontSize={16} lineHeight={24}>
          {worker.name}
        </Text>

        <Text
          fontSize={13}
          color={colors.GRAY}
          fontWeight="normal"
          lineHeight={19}
        >
          {`Started work: ${worker.started}`}
        </Text>
      </BadgeText>

      {!isGeneralManager && (
        <RemoveWorker onClick={() => onRemoveWorker(worker.id)} />
      )}
    </Badge>
  </>
);
