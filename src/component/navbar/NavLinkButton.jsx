import { NavLink } from 'react-router-dom';

const NavLinkButton = ({ to, label, icon: Icon, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 lg:text-20px font-inter font-medium ${isActive ? 'bg-secondary rounded-md text-white px-6 py-2.5' : 'text-primary'} ${className}`
      }
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </NavLink>
  );
};

export default NavLinkButton;


