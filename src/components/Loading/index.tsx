import { useEffect } from "react";
import { FC, useState, CSSProperties } from "react";

import ILoadingProps from "./props";
import { LoadingBlock, Wrapper } from "./styles";
import { Img } from "..";
import { IMAGES } from "../../assets";

export const Loading: FC<ILoadingProps> = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeout: number;
    const delay = step === 0 || step === 4 ? 0 : 700;

    if (step < 7) {
      timeout = window.setTimeout(
        () => setStep((prevStep) => prevStep + 1),
        delay
      );
    } else {
      setStep(0);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [step]);

  const pandaLogoLoading = (): CSSProperties | undefined => {
    const defaultLogoState: CSSProperties = {
      position: "absolute",
      top: "20px",
      left: "5px",
      transition: "all 0.4s ease-in",
    };

    switch (step) {
      case 1:
        return { ...defaultLogoState, left: "95px", opacity: 1 };
      case 2:
        return { ...defaultLogoState, left: "192px" };
      case 3:
        return { ...defaultLogoState, left: "285px" };
      case 4:
        return { ...defaultLogoState, left: "378px" };
      case 5:
        return { ...defaultLogoState, left: "420px", opacity: 0 };
      case 6:
        return { ...defaultLogoState, left: "-40px", opacity: 0 };
      default:
        return defaultLogoState;
    }
  };

  return (
    <Wrapper>
      <LoadingBlock>
        <Img
          src={IMAGES.loadingLogo.P}
          height={80}
          marginRight={31}
          style={{ position: "absolute", top: "16px", left: "2px" }}
        />
        <Img
          src={IMAGES.loadingLogo.PANDA_LOADING}
          style={pandaLogoLoading()}
        />
        <Img src={IMAGES.loadingLogo.A} height={64} marginRight={31} />
        <Img src={IMAGES.loadingLogo.N} height={64} marginRight={31} />
        <Img src={IMAGES.loadingLogo.D} height={80} marginRight={31} />
        <Img src={IMAGES.loadingLogo.A} height={64} marginRight={31} />
      </LoadingBlock>
    </Wrapper>
  );
};
