import { Field, ErrorMessage } from "formik";

interface FormProps {
  text: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

const FormInput = ({ text, name, type, required, placeholder }: FormProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-[13px] text-secondary">
        {required && <span className="text-red ml-1">*</span>}
        {text}:
      </label>
      <Field
        className="outline-none border-b border-neutral-200 focus:border-blue placeholder:font-light placeholder:text-neutral-300"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        render={(message) => (
          <div className="text-[12px] text-red">{message}</div>
        )}
      />
    </div>
  );
};

export default FormInput;
