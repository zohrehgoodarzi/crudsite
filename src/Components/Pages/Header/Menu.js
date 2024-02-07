import { NavLink } from "react-router-dom";
import "./Css/Menustyle.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm" id="menustyle">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={(NavDate) =>
                  NavDate.isActive
                    ? "nav-link text-white bg-success"
                    : "nav-link text-white text-capitalize"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(NavDate) =>
                  NavDate.isActive
                    ? "nav-link bg-success text-white"
                    : "nav-link text-white text-capitalize"
                }
                to="/prouducts"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(NavDate) =>
                  NavDate.isActive
                    ? "nav-link bg-success text-white"
                    : "nav-link text-white text-capitalize"
                }
                to="/posts"
              >
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(NavDate) =>
                  NavDate.isActive
                    ? "nav-link bg-success text-white"
                    : "nav-link text-white text-capitalize"
                }
                to="/management"
              >
                Management
              </NavLink>
            </li>
      
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
