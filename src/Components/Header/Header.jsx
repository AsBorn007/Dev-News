import { Link, NavLink } from "react-router-dom";
import { House, Search, Bookmark, User } from "lucide-react";
import { nanoid } from "nanoid";
import Wrapper from "../Common/Wrapper";
import SearchBar from "../Search";
import Logo from "../Logo";
import Login from "../Form/Login";
const ID = nanoid();

const Header = () => {
  const navMenuItem = [
    {
      name: "home",
      path: "/",
      Icon: House,
    },
    {
      name: "newdetails",
      path: "/newdetails",
      Icon: Search,
    },
    {
      name: "blog",
      path: "/blog",
      Icon: Bookmark,
    },
    {
      name: "category",
      path: "/category",
      Icon: User,
    },
  ];
  return (
    <div className="bg-[#0a1323]">
      <Wrapper>
        <div className="flex gap-2 items-center justify-between">
          <div className="webLogo w-[200px]">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-4 justify-center items-center">
              {navMenuItem.map((navItem, i) => {
                const Icon = navItem.Icon;
                return (
                  <>
                    <li key={i}>
                      <NavLink
                        id={ID}
                        to={navItem.path}
                        className={({ isActive }) =>
                          `flex gap-2 justify-center items-center font-body
                          text-white border-0 rounded-[50px] px-3 py-[5px]
                          transition-all duration-300
                          hover:text-[#b440ee] hover:bg-[#fefefe]
                          ${isActive ? "text-[#b440ee] bg-[#e37af9]" : "bg-transparent"}`
                        }
                      > 
                        <span>
                          <Icon size={20} />
                        </span>

                        <span className="capitalize">{navItem.name}</span>
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
          {/* <SearchBar /> */}
          <Login />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
