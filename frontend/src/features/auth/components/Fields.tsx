import  { ChangeEvent, FC } from "react";

interface FieldsI {
  title: string;
  placeholder: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  errors: string | undefined;
}

const Fields: FC<FieldsI> = ({
  title,
  placeholder,
  type,
  name,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-1 py-2">
      <p className="font-sans text-xl font-bold capitalize text-white">
        {title}
      </p>
      <input
        type={type}
        className="bg-[#8A8A8A70] px-4 py-3 rounded-lg border-none outline-[#00ffff] "
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        
      />
      {errors && <p className="text-white">{errors}</p>}
    </div>
  );
};

export default Fields;
