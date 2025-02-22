"use client";

import { useState } from "react";

import Link from "next/link";

import { Drawer } from "antd";

import {
  IoPersonCircleOutline,
  IoCart,
  IoSearch,
  IoMenuSharp,
} from "react-icons/io5";

import { NavBar, Logo, Pages, Page, CartAndLogin } from "./styles";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavBar>
      <Logo>
        <Link href="/">Woolshoes</Link>
      </Logo>
      <Pages>
        <Page>
          <Link href="/products">Produtos</Link>
        </Page>
        <Page>
          <Link href="/">Sobre</Link>
        </Page>
        <Page>
          <Link href="/">Contato</Link>
        </Page>
      </Pages>
      <CartAndLogin>
        <Page>
          <Link href="/" onClick={() => setOpen(true)}>
            <IoCart />
            <p>Carrinho</p>
          </Link>
        </Page>
        <Page>
          <Link href={"/"}>
            <IoPersonCircleOutline />
            <p>Login</p>
          </Link>
        </Page>
        <IoMenuSharp />
      </CartAndLogin>
      <Drawer
        title="Seu carrinho de compras"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <p>Vazio</p>
      </Drawer>
    </NavBar>
  );
};
