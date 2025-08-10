import { ISignUpAndSingInForm } from "../../utils/types";

export default interface ISignInAndUpProps {
  isLogin?: boolean;
  onSubmit: (values: ISignUpAndSingInForm) => void;
}
