import React from 'react';
import './TopBar.scss';
import { Person, Mail} from '@material-ui/icons';

const TopBar = ({ menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
          <div className="wrapper">
              <div className="left">
                  <a href="#intro" className="logo">HABIB CODER</a>
                  <div className="itemcontainer">
                        <Person className="icon"></Person>
                        <span>+88016433-69104</span>
                  </div>
                  <div className="itemcontainer">
                        <Mail className="icon"></Mail>
                        <span>habibur.rahman.0927@gmail.com</span>
                  </div>
              </div>
              <div className="right">
                  <div className="hambuger" onClick={() => setMenuOpen(!menuOpen)}>
                      <span className="line1"></span>
                      <span className="line2"></span>
                      <span className="line3"></span>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default TopBar;