import { Link } from "react-router-dom";
import { House, Search, Bookmark, User } from "lucide-react";
import { nanoid } from "nanoid";
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
    <div>
      <div className="webLogo w-[200px]">
        <img src="" alt="" />
      </div>
      <nav>
        {navMenuItem.map((navItem, i) => {
          const Icon = navItem.Icon;
          return (
            <>
              <Link id={ID} key={i} to={navItem.path}>
                <span>
                  <Icon size={20} />
                </span>
                <span>{navItem.name}</span>
              </Link>
            </>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
