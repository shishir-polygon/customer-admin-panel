import styled from "styled-components";

import { colors } from "../../utils/colors";

export const SettingsWrapper = styled.div`
  display: flex;
`;

export const SelectedSetting = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 500px;
  background: ${colors.WHITE}CC;
  border: 1px solid ${colors.KILLARNEY}0D;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px;
`;
