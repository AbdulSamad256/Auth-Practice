import React, { useContext } from "react"; 
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  Avatar,
  Spacer,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  console.log("user in header=>", user);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleLogoutUser = async () => {
    await signOut(auth);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} variant="sticky">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <span className="font-bold text-lg text-inherit ml-2">ACME</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link  to="/Reception" aria-current="page" href="#">
            Reception
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link  to="/Department" href="#" aria-current="page">
          Department
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/Admin" aria-current="page" href="#">
            Admin
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        {user?.isLogin ? (
          <>
            {/* <Avatar src={user?.userInfo?.photoUrl} size="md" /> */}
            <Button onClick={handleLogoutUser} color="primary" variant="solid" size="lg">
              Log Out
            </Button>
          </>
        ) : (
          <>
            <NavbarItem>
              <Button
                to={"/signup"}
                as={Link}
                color="primary"
                variant="flat"
                size="sm"
              >
                Sign Up
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Link to={"/signin"}>Login</Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={index === menuItems.length - 1 ? "danger" : "foreground"}
              href="#"
              size="lg"
              className="w-full text-center"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
