import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">

        <nav className="footer__nav">

          <NavLink activeClassName="footer__link--active"
                   className="footer__link"
                   exact to="/mono">Grid
          </NavLink>

          <NavLink activeClassName="footer__link--active"
                   className="footer__link"
                   exact to="/list">List
          </NavLink>

          <NavLink activeClassName="footer__link--active"
                   className="footer__link"
                   exact to="/add">Add
          </NavLink>

          <NavLink activeClassName="footer__link--active"
                   className="footer__link"
                   exact to="/edit">Edit
          </NavLink>
          
        </nav>
        
      </footer>
    );
  }
}

export default Footer;
