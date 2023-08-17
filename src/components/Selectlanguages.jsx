import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { BsGlobe } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Selectlanguages({ isTop }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.dir()]);

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="language">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <BsGlobe
              onClose={handleClose}
              className="text-mainColor text-xl text-white "
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 1,
          sx: {
            bgcolor: isTop ? "background.paper" : "#d3d3d3",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            zIndex: 100000,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: isTop ? "background.paper" : "#d3d3d3",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            changeLanguage("ar");
          }}
          sx={{ textTransform: "capitalize" }}
        >
          arabic
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage("en");
          }}
          sx={{ textTransform: "capitalize" }}
        >
          english
        </MenuItem>

        {/* <MenuItem
          onClick={() => {
            handleClose;
          }}
          sx={{ textTransform: "capitalize" }}
        >
          {locales.map((lng) => {
            return (
              <Link href="/" locale={lng} className="flex flex-col space-y-4">
                {lng}
              </Link>
            );
          })}
        </MenuItem> */}
      </Menu>
    </React.Fragment>
  );
}
