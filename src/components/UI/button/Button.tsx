import { ButtonProps } from "../../../types/typeBtn";

import "@components/UI/button/button.scss";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
