import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
// import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      {/* <Link href='/'>
        <a>
          <img src='/images/logo_1.png' alt='logo' width={250} height={50} />
        </a>
      </Link> */}
    </Div1>
    <Div2 style={{ padding: "10px" }}>
      <li>
        <Link href="#services">
          <NavLink> Services </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink> Technologies </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink> About </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#">
          <NavLink> Login </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#">
          <NavLink> Sign up </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="#">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
