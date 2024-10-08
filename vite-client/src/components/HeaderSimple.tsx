import { useState } from "react";
import { Container, Image, Group, Burger, UnstyledButton, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/HeaderSimple.module.css";
import { Link, useLocation } from "wouter";

const links = [
  // { link: "/home", label: "Home" },
  { link: "/dashboard", label: "Dashboard" },
  { link: "/dataroom", label: "Data Room" },
  { link: "/chat", label: "Chat" },
  { link: "/report", label: "Report" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [, setLocation] = useLocation();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      // className={classes.link}
      className={classes.bottomNavLink}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
      <div className={classes.bananalystLogo}>
        <Image
            src="/bananalystlogolightning.png"
            alt="bananalystlogo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <UnstyledButton
          size={46}
          style={{
            padding: rem(14) + " " + rem(16),
            fontSize: rem(32),
          }}
          onClick={() => setLocation("/")}
        >
          Bananalyst.AI
        </UnstyledButton>
        <div>
          <Link
            key={'Home'}
            href={'/home'}
            className={classes.link}
            data-active={active === '/home' || undefined}
            onClick={(event) => {
              event.preventDefault();
              setActive('/home');
            }}
          >
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
        {/* <UnstyledButton
          size={46}
          style={{
            padding: rem(14) + " " + rem(16),
            fontSize: rem(32),
          }}
          onClick={() => setLocation("/")}
        >
          Bananalyst.AI
        </UnstyledButton> */}
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
