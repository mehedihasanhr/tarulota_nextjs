import styles from "./button.module.css";

interface Tbutton {
  children: any;
  verient?: string;
  className?: string;
  onClick?: Function;
  disable?: boolean;
}

const Button = ({
  children,
  verient = "primary",
  className,
  onClick,
  disable,
}: Tbutton) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick && onClick(e);
  };
  return (
    <button
      className={`${styles.__button} btn_${verient} ${styles.__disable} ${className}`}
      disabled={disable!== undefined ? disable : false}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOnClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
