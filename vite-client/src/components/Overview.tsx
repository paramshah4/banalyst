import { Container, Image, Flex, Table } from "@mantine/core";
import classes from "../styles/Overview.module.css";
import { Link, useLocation } from "wouter";

export default function Overview() {
  const elements = [
    {
      rowName: "Revenue",
      2022: "",
      2023: "",
      2024: "",
      2025: "",
      2026: "",
      2027: "",
    },
    {
      rowName: "Costs of Goods Sold",
      2022: "",
      2023: "",
      2024: "",
      2025: "",
      2026: "",
      2027: "",
    },
    {
      rowName: "Operating Income",
      2022: "",
      2023: "",
      2024: "",
      2025: "",
      2026: "",
      2027: "",
    },
    {
      rowName: "SG&A",
      2022: "",
      2023: "",
      2024: "",
      2025: "",
      2026: "",
      2027: "",
    },
    {
      rowName: "EBITDA",
      2022: "",
      2023: "",
      2024: "",
      2025: "",
      2026: "",
      2027: "",
    },
    {
      rowName: "Other",
      2022: "",
      2023: "",
      2024: "",
      2025: "",
      2026: "",
      2027: "",
    },
    {
      rowName: "NET income",
      2022: "",
      2023: "",
      2024: "",
      2025: "",
      2026: "",
      2027: "",
    },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.rowName}>
      <Table.Td>{element.rowName}</Table.Td>
      <Table.Td>{element["2022"]}</Table.Td>
      <Table.Td>{element["2023"]}</Table.Td>
      <Table.Td>{element["2024"]}</Table.Td>
      <Table.Td>{element["2025"]}</Table.Td>
      <Table.Td>{element["2026"]}</Table.Td>
      <Table.Td>{element["2027"]}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container
      size="xl"
      display={"flex"}
      style={{
        justifyContent: "space-between",
        maxWidth: "80%",
        flexWrap: "wrap",
      }}
    >
      <Container
        display={"flex"}
        style={{
          flexDirection: "row",
          margin: "0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: "20px",
          }}
        >
          <Image
            src="/BananaLogisticsLogo.jpg"
            alt="Overview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <Flex
          display="flex"
          direction={"column"}
          style={{
            justifyContent: "center",
          }}
        >
          <div>
            <span className={classes.status}>
              In Due Diligence
            </span>
          </div>
          <div style={{
            margin: '-1px',
          }}><span className={classes.companyname}>Banana Logistics</span></div>
          <div style={{
            // margin: '10px',
            marginTop: '16px',
          }}><span className={classes.category}>Industry:</span> <span>Logistics</span></div>
          <div style={{
            // margin: '10px',
          }}><span className={classes.category}>Location:</span> <span>United States</span></div>
          <div>
          {/* <div>
          <Link
            key={"Data Room"}
            href={"/dataroom"}
            className={classes.dataroomlink}
            // data-active={active === "/dataroom" || undefined}
            onClick={() => {
            }}
          >
             Data Room
          </Link>
          </div> */}
          </div>
        </Flex>
      </Container>
      <Table
        style={{
          width: "40%",
        }}
        styles={{
          thead: {
            borderBottom: "1px solid #ddd",
          },
          tbody: {
            borderBottom: "1px solid #ddd",
            padding: "4rem",
          },
          tfoot: {
            borderTop: "1px solid #ddd",
          },
          th: {
            border: "1px solid #ddd",
            padding: "8px",
          },
          td: {
            border: "1px solid #ddd",
            padding: "0.5rem 2.25rem",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th
              style={{
                border: 0,
              }}
            ></Table.Th>
            <Table.Th
              colSpan={3}
              style={{
                border: "1px",
                textAlign: "center",
                backgroundColor: "#F0F0F0",
              }}
            >
              Historic
            </Table.Th>
            <Table.Th
              colSpan={3}
              style={{
                border: "1px",
                textAlign: "center",
                backgroundColor: "#4E88FF4F",
              }}
            >
              Projected
            </Table.Th>
          </Table.Tr>
          <Table.Tr
            style={{
              border: "1px",
              textAlign: "center",
              backgroundColor: "#F0F0F0",
            }}
          >
            <Table.Th></Table.Th>
            <Table.Th>2022</Table.Th>
            <Table.Th>2023</Table.Th>
            <Table.Th>2024</Table.Th>
            <Table.Th>2025</Table.Th>
            <Table.Th>2026</Table.Th>
            <Table.Th>2027</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}
