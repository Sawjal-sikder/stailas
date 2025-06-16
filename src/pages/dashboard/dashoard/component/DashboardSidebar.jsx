import React from 'react';
import { NavLink } from 'react-router-dom';
import { Gauge, Users, Shield } from 'lucide-react'; 

const DashboardSidebar = () => {
      const menuItems = [
            {
                  label: 'DashBoard',
                  icon: <Gauge className="w-5 h-5" />,
                  to: '/dashoard/home',
            },
            {
                  label: 'User Management',
                  icon: <Users className="w-5 h-5" />,
                  to: '/dashoard/user-management',
            },
            {
                  label: 'Administrators',
                  icon: <Shield className="w-5 h-5" />,
                  to: '/dashoard/administrators',
            },
      ];

      return (
            <div className='absolute top-28 left-0 w-[240px] px-5'>
                  <div className="w-60 bg-white max-h-screen p-4">
                        <ul className="space-y-4">
                              {menuItems.map((item, idx) => (
                                    <li key={idx}>
                                          <NavLink
                                                to={item.to}
                                                className={({ isActive }) =>
                                                      `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition 
                                                      ${isActive ? 'bg-secondary text-white font-semibold' : 'text-primary hover:bg-gray-100'}`
                                                }
                                          >
                                                {item.icon}
                                                <span className="text-[14px] font-inter">{item.label}</span>
                                          </NavLink>
                                    </li>
                              ))}
                        </ul>
                  </div>
            </div>
      );
};

export default DashboardSidebar;
