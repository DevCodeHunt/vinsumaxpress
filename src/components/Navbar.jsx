import { Link, useLocation } from "react-router-dom";
import Logo from "../pages/Logo";
import { ROUTES } from "../utils/routes";
import { AlignJustify, X } from "lucide-react";
import { useNavbarStore } from "../stores";
import { useCallback } from "react";

const menus = [
  { label: "Home", path: ROUTES.HOME },
  { label: "About Us", path: ROUTES.ABOUT },
  { label: "Services", path: ROUTES.SERVICES },
  { label: "Tools", path: ROUTES.TOOLS },
  { label: "Media Center", path: ROUTES.MEDIACENTER },
  { label: "Contact", path: ROUTES.CONTACT },
];

const MenuLink = ({ label, path }) => {
  const { pathname } = useLocation();
  const hideMenu = useNavbarStore((state) => state.hideMenu);
  const isActive = pathname === path;

  const onClose = useCallback(() => {
    setTimeout(() => hideMenu(), 200);
  }, [hideMenu]);
  return (
    <li>
      <Link
        onClick={onClose}
        to={path}
        className={`md:inline block text-sm  font-medium relative ${
          isActive
            ? "active-link  text-primary font-semibold"
            : "underline-hover"
        } `}
      >
        {label}
      </Link>
    </li>
  );
};

const MenuLinks = () => {
  return (
    <ul className="hidden md:flex items-center gap-4 ">
      {menus.map((menu) => (
        <MenuLink key={menu.label} label={menu.label} path={menu.path} />
      ))}
    </ul>
  );
};

const Menu = () => {
  const show = useNavbarStore((state) => state.show);
  const hideMenu = useNavbarStore((state) => state.hideMenu);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/20 z-50 md:hidden block">
      <div className="bg-white fixed top-0 bottom-0 left-0 h-screen w-64 p-4">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <button onClick={hideMenu} className="primary-btn p-1 rounded">
            <X size={18} />
          </button>
        </div>

        <ul className="space-y-4 my-6">
          {menus.map((menu) => (
            <MenuLink key={menu.label} label={menu.label} path={menu.path} />
          ))}
        </ul>

        <div className="flex flex-col items-center justify-center gap-4">
          <button className="btn secondary-btn w-full">Branch Locator</button>
          <button className="btn primary-btn w-full">Track</button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const toggleMenu = useNavbarStore((state) => state.toggleMenu);

  return (
    <header className="w-full bg-foreground py-4 border-b">
      <nav className="wrapper flex items-center justify-between gap-6">
        {/* Logo */}
        <Logo />
        <MenuLinks />

        <div className="hidden md:flex items-center gap-4">
          <button className="btn text-primary font-semibold opacity-90">
            Branch Locator
          </button>
          <button className="btn primary-btn">Track</button>
        </div>

        <button onClick={toggleMenu} className="md:hidden block">
          <AlignJustify size={28} />
        </button>
      </nav>

      <Menu />
    </header>
  );
};

export default Navbar;
