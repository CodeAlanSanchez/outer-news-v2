const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list" role={'list'}>
        <li className="navbar-item">
          <a className="navbar-link" href="#hero">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#articles">
            Articles
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
