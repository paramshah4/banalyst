import { useState } from "react";
import { Container, Group, Burger, UnstyledButton, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/HeaderSimple.module.css";

const links = [
  { link: "/dataroom", label: "Data Room" },
  { link: "/chat", label: "Chat" },
  { link: "/reports", label: "Reports" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <UnstyledButton size={46} style={{
          padding: rem(14) + ' ' + rem(16),
          fontSize: rem(32),
        }}>
          Banalyst
        </UnstyledButton>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
