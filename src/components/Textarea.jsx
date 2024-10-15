const Textarea = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 5,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        {...rest}
        className="border border-gray-300 rounded-lg py-3 px-3 text-sm text-gray-800 outline-0 focus:ring-1 focus:ring-gray-700 focus:border-0 resize-none"
      />
      {error && <small className="text-red-600">Required</small>}
    </div>
  );
};

export default Textarea;
