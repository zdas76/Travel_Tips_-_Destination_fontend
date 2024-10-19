"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemSwitcher";

import UserDropdown from "./userDropdown";
import { useUser } from "@/context/user.provider";

export default function Navber() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useUser();

  const menuItems = [
    { label: "News Feed", link: "/news-feed" },
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-blue-400">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarItem isActive key={index}>
            <Link href={item.link} aria-current="page" color="foreground">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          {!user?.email ? (
            <Link href="/login" color="foreground" className="font-bold">
              Login
            </Link>
          ) : (
            <UserDropdown {...user} />
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.link}
              size="lg"
              color="foreground"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>Log Out</NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
