import { Field } from "formik";

interface Props {
  text: string;
  name: string;
  value: string;
}

const RadioButton = ({ text, name, value }: Props) => {
  return (
    <label className="radio-button__container" htmlFor={value}>
      <Field type="radio" name={name} value={value} id={value} />
      {text}
      <span className="radio-button__checkmark"></span>
    </label>
  );
};

export default RadioButton;
