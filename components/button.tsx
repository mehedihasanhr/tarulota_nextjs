import styles from "./button.module.css";

interface Tbutton{
    children: any;
    verient?: string;
    className?: string;
}

const Button = ({ children, verient="primary", className }: Tbutton) => {
  return <button className={`${styles.__button} btn_${verient} ${className}`}>{children}</button>;
};

export default Button;
