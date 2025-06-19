import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Gauge, Users, Shield, Menu } from 'lucide-react';

const DashboardSidebar = () => {
      const [open, setOpen] = useState(false);
      const [showMenuButton, setShowMenuButton] = useState(true);
      const lastScrollY = useRef(window.scrollY);

      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > lastScrollY.current) {
                        setShowMenuButton(false); // Scrolling down
                  } else {
                        setShowMenuButton(true); // Scrolling up
                  }
                  lastScrollY.current = window.scrollY;
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const menuItems = [
            {
                  label: 'DashBoard',
                  icon: <Gauge className="w-5 h-5" />,
                  to: '/dashboard/home',
            },
            {
                  label: 'User Management',
                  icon: <Users className="w-5 h-5" />,
                  to: '/dashboard/user-management',
            },
            {
                  label: 'Administrators',
                  icon: <Shield className="w-5 h-5" />,
                  to: '/dashboard/administrators',
            },
      ];

      return (
            <>
                  {/* Mobile menu button */}
                  {showMenuButton && (
                        <button
                              className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
                              onClick={() => setOpen(!open)}
                              aria-label="Open sidebar"
                        >
                              <Menu className="w-6 h-6" />
                        </button>
                  )}

                  {/* Sidebar */}
                  <div
                        className={`
                              fixed top-0 left-0 h-full w-[240px] bg-white p-4 z-40 transition-transform duration-300
                              ${open ? 'translate-x-0' : '-translate-x-full'}
                              md:translate-x-0 md:static md:block md:w-60 md:p-4
                        `}
                  >
                        <ul className="space-y-4 mt-16 md:mt-0">
                              {menuItems.map((item, idx) => (
                                    <li key={idx}>
                                          <NavLink
                                                to={item.to}
                                                className={({ isActive }) =>
                                                      `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition 
                                                      ${isActive ? 'bg-secondary text-white font-semibold' : 'text-primary hover:bg-gray-100'}`
                                                }
                                                onClick={() => setOpen(false)}
                                          >
                                                {item.icon}
                                                <span className="text-[14px] font-inter">{item.label}</span>
                                          </NavLink>
                                    </li>
                              ))}
                        </ul>
                  </div>

                  {/* Overlay for mobile */}
                  {open && (
                        <div
                              className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                              onClick={() => setOpen(false)}
                        />
                  )}
            </>
      );
};

export default DashboardSidebar;
