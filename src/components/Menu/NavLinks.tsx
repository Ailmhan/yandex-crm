import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "Текущие заявки",
    path: "/today",
  },
  {
    name: "Все заявки",
    path: "/",
  },
  {
    name: "Регламентные заявки",
    path: "/important",
  },
  {
    name: "Выполненные заявки",
    path: "/completed",
  },
  {
    name: "Не выполненные заявки",
    path: "/uncompleted",
  },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${
                currentPath === link.path ? classActive : ""
              }`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
