"use client";
import { useState } from "react";
import {
  Container,
  Image,
  Group,
  Burger,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/HeaderSimple.module.css";
import Link from "next/link";

const links = [
  // { link: "/", label: "Home" },
  { link: "/dashboard", label: "Dashboard" },
  { link: "/dataroom", label: "Data Room" },
  { link: "/chat", label: "Chat" },
  { link: "/report", label: "Report" },
];

export default function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.bottomNavLink}>
      {link.label}
    </a>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          <div className={classes.bananalystLogo}>
            <Image
              src="/bananalystlogolightning.png"
              alt="verus intel logo"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <UnstyledButton
            size={46}
            style={{
              padding: rem(14) + " " + rem(16),
              fontSize: rem(32),
            }}
          >
            Verus Intel
          </UnstyledButton>
          <div>
            <Link key={"Home"} href={"/"} className={classes.link}>
              Home
            </Link>
          </div>
          {/* <Group gap={5} visibleFrom="xs">
          {items}
        </Group> */}

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>

        <Container className={classes.rightContainer}>
          <div>
            <Link
              key={"Create New Deal"}
              href={"/createnewdeal"}
              className={classes.link}
              data-active={active === "/createnewdeal" || undefined}
              onClick={(event) => {
                event.preventDefault();
                setActive("/createnewdeal");
              }}
            >
              Create New Deal
            </Link>
          </div>
          <div className={classes.icon}>
            <Image
              src="/SearchBar.png"
              alt="search"
              style={{ width: "70%", height: "70%", objectFit: "cover" }}
            />
          </div>
          <div className={classes.icon}>
            <Image
              src="/Notificationsicon.png"
              alt="notification"
              style={{ width: "70%", height: "70%", objectFit: "cover" }}
            />
          </div>
          <div className={classes.icon}>
            <Image
              src="/newprofilephoto.png"
              alt="profilephoto"
              style={{ width: "70%", height: "70%", objectFit: "cover" }}
            />
          </div>
        </Container>
      </header>
      <header className={classes.portcoHeader}>
        <Container size="xl" className={classes.inner}>
          <div className={classes.bottomNavBarItems}>
            <Group gap={5} visibleFrom="xs">
              {items}
            </Group>
          </div>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>

        <Container className={classes.rightContainer}>
          {/* <div>
          <Link
            key={'Create New Deal'}
            href={'/createnewdeal'}
            className={classes.link}
            data-active={active === '/createnewdeal' || undefined}
            onClick={(event) => {
              event.preventDefault();
              setActive('/createnewdeal');
            }}
          >
             Create New Deal
          </Link>        
        </div> */}
          {/* <div className={classes.icon}>
        <Image
            src="/SearchBar.png"
            alt="search"
            style={{ width: "70%", height: "70%", objectFit: "cover" }}
          />
        </div> */}
          {/* <div className={classes.icon}>
        <Image
            src="/Notificationsicon.png"
            alt="notification"
            style={{ width: "70%", height: "70%", objectFit: "cover" }}
          />
        </div> */}
          {/* <div className={classes.icon}>
        <Image
            src="/breeprofilephoto.png"
            alt="breephoto"
            style={{ width: "70%", height: "70%", objectFit: "cover" }}
          />
        </div> */}
        </Container>
      </header>
    </>
  );
}
