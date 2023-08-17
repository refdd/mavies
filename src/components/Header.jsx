import { BellIcon, SearchIcon } from "@heroicons/react/solid";

import { useEffect, useState } from "react";
import BasicMenu from "./BasicMenu";
import logo from "../../src/assets/image/logo.png";
import { IconButton, Tooltip } from "@mui/material";
import { AiOutlineLogout } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Selectlanguages from "./Selectlanguages";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/ThemeContext";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout, user } = useAuth();
  const { t, i18n } = useTranslation();
  const { darkTheme, setDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center gap-2 md:gap-10">
        <Link to={"/"}>
          <img
            src={logo}
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>

        <BasicMenu />

        <ul className="hidden gap-4 md:flex">
          <li className="headerLink">{t("common:common.Home")}</li>
          <li className="headerLink">{t("common:common.TVShows")}</li>
          <li className="headerLink">{t("common:common.Movies")}</li>
          <li className="headerLink">{t("common:common.New_Popular")}</li>
          <li className="headerLink">{t("common:common.My-List")}</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className={`text-xl    border rounded-full px-2 py-1 hover:shadow-lg ${
            darkTheme
              ? "bg-white dark:text-gray-900 "
              : " dark:bg-gray-900 dark:text-gray-900"
          }`}
        >
          {darkTheme ? "💡 Light" : "🌙 Dark"}
        </button>
        <Selectlanguages />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <div className="">
          {user && (
            <Tooltip title="logout" onClick={() => logout()}>
              <IconButton>
                <AiOutlineLogout className="text-white" />
              </IconButton>
            </Tooltip>
          )}
        </div>
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  );
}

export default Header;
