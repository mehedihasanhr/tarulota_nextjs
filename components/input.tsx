import styles from "./input.module.css";

interface PropType {
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  InputGroupClass?: string;
  LabelClass?: string;
  InputClass?: string;
  onChange?: Function;
  required?: boolean;
  alert?: string;
  readonly?:boolean;
}

const Input = ({
  type = "text",
  label,
  value,
  placeholder,
  InputGroupClass,
  LabelClass,
  InputClass,
  onChange,
  required,
  alert,
  readonly
}: PropType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange && onChange(e);
  };
  return (
    <div className={`${styles.__input_group} ${InputGroupClass}`}>
      <label htmlFor="" className={`${styles.__input_label} ${LabelClass}`}>
        {label} { required && <span className={styles.__require}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`${styles.__input_control} ${InputClass}`}
        readOnly={readonly ? true : false}
      />
     {
       alert && alert.length > 0 &&  <p className={styles.__alert_text}> {alert} </p>
     }
    </div>
  );
};

export default Input;
