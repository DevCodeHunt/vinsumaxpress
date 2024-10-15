const Logo = () => {
  return (
    <div to="/" className="flex items-center gap-2">
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-9 h-9 object-contain"
      />
      <span className="text-2xl font-bold">VINSUM</span>
    </div>
  );
};

export default Logo;
