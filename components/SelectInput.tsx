import { Field } from "formik";

interface Props {
  name: string;
  data: {
    id: number;
    label: string;
    value: string;
  }[];
}

const SelectInput = ({ data, name }: Props) => {
  return (
    <Field
      className="border-b w-full text-secondary text-[14px] focus:border-blue focus:outline-none"
      as="select"
      name={name}
    >
      {data.map(({ id, label, value }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </Field>
  );
};

export default SelectInput;
