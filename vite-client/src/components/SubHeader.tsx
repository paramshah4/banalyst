import { Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function SubHeader() {
  const links = [
    { link: "/summary", label: "Summary" },
    { link: "/corp-structure", label: "Corp. Structure" },
    { link: "/management", label: "Board of Directors" },
    { link: "/cap-table", label: "Cap Table" },
    { link: "/historical-financials", label: "Historical Financials" },
    { link: "/forward-financials", label: "Forward-looking Financials" },
    { link: "/valuation", label: "Valuation" },
    { link: "/legal", label: "Legal" },
    { link: "/reports", label: "Reports" },
  ];

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      // className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
      style={{
        color: "black",
        borderRadius: "10px 10px 0px 0px",
        border: "1px solid #ccc",
        padding: "10px 10px",
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header
    >
      <Container
        size="xl"
      >
        <Group gap={5} visibleFrom="xs" style={{
            display: "flex",
            alignItems: "center",
            padding: "20px 0",
        }}>
          {items}
        </Group>
      </Container>
    </header>
  );
}
