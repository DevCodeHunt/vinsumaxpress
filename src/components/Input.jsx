const Input = ({
  label,
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
        className="border border-gray-300 rounded-lg py-3 px-3 text-sm text-gray-800 outline-0 focus:ring-1 focus:ring-gray-700 focus:border-0"
      />
      {error && <small className="text-red-600">Required</small>}
    </div>
  );
};

export default Input;
