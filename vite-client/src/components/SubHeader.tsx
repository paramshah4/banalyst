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
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
      style={{
        color: "black",
        borderRadius: "5px 5px 0px 0px",
        border: "1px solid #DDDDDD",
        padding: "0.5rem 1rem",
        backgroundColor: "#F8F8F8",
      }}
    >
      {link.label} <a style={{
        color: "#DDDDDD",
        paddingLeft: "1rem"
      }}>X</a>
    </a>
  ));

  return (
    <header
    >
      <Container
        style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "100%",
            padding: "20px 30px"
        }}
      >
        <Group gap={3} visibleFrom="xs" style={{
            display: "flex",
            alignItems: "center",
        }}>
          {items}
        </Group>
      </Container>
    </header>
  );
}
