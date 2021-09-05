import styles from "./button.module.css";

interface Tbutton {
  children: any;
  verient?: string;
  className?: string;
  onClick?: Function;
}

const Button = ({
  children,
  verient = "primary",
  className,
  onClick,
}: Tbutton) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick && onClick(e);
  };
  return (
    <button
      className={`${styles.__button} btn_${verient} ${className}`}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOnClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
