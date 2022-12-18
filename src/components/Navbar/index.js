// == Import npm
import React from 'react';
// == Import

import links from './data';

// == Composant Navbar
const NavBar = () => (
  <nav role="banner">
    {links.map((link) => (
      <li
        key={link.id}
      >
        {link.name}
      </li>
    ))}
  </nav>
);

// == Export
export default NavBar;
