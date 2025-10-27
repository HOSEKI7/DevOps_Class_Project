type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = (props: InputProps) => {
  const { label, type, placeholder, value, onChange } = props;

  return (
    <div className="my-10">
      <div className="flex flex-col">
        <label className="mb-2 text-lg font-bold text-slate-700 ml-2">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full py-3 px-3 rounded-lg border text-slate-500 font-medium text-md border-slate-200 focus:outline-none focus:border-slate-500 hover:shadow "
        />
      </div>
    </div>
  );
};

export default InputForm;
