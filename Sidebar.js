import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import icon from "../images/Shape.png"
import icon2 from "../images/Shape(1).png"
import icon3 from "../images/Shape(2).png"

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <img src={icon3}  style={{width:'36px', height:'36px' , padding:'5px' , marginRight : "18px"}}  />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <img src={icon2} style={{width:'36px', height:'36px' , padding:'5px' , marginRight : "18px"}} />
                <p>Lorem</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <img src= {icon}  style={{width:'36px', height:'36px' , padding:'5px', marginRight : "18px"}}  />
                <p>Ipsum</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar ;