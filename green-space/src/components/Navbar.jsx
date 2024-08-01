import { NavLink } from "react-router-dom"
import "../styles/Header.css"

const Navbar = () => {
  return (
    <header>
        <nav>
          <a href>
            <NavLink to="/">Kijani Kilimani</NavLink>
          </a>
            <div>
                <ul>
                    <li>
                      <NavLink to="/"><a href>Home</a></NavLink>
                    </li>
                    <li>
                      <NavLink to="/events"><a href>Events</a></NavLink>
                    </li>
                    <li>
                      <NavLink to="/volunteer"><a href>Volunteer</a></NavLink>
                    </li>
                </ul>
                <NavLink to="signup"><button class="btn btn-primary">Sign up</button></NavLink>
                <NavLink to="login"><button class="btn btn-secondary">Log in</button></NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
