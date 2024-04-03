import { ButtonBase } from "@mui/material";
import logo from "../../../assets/images/logo.svg";

const LogoSection = () => {
  return (
    <ButtonBase>
      <img src={logo} alt="Logo" />
    </ButtonBase>
  );
};

export default LogoSection;
