import { NavLink } from 'react-router-dom';

const NavLinkFooter = ({ to, label, icon: Icon, className }) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center gap-2 px-4 py-2 lg:text-[20px] font-inter font-medium ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </NavLink>
  );
};

export default NavLinkFooter;
