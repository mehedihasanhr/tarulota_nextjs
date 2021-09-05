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
}: PropType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange && onChange(e);
  };
  return (
    <div className={`${styles.__input_group} ${InputGroupClass}`}>
      <label htmlFor="" className={`${styles.__input_label} ${LabelClass}`}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`${styles.__input_control} ${InputClass}`}
      />
    </div>
  );
};

export default Input;
