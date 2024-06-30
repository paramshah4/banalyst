import { Container, Image, Flex, Table } from "@mantine/core";
import classes from "../styles/Overview.module.css";
import { Link, useLocation } from "wouter";

export default function Overview() {
  const elements = [
    {
      rowName: "Revenue",
      2022: "186,575",
      2023: "18,273",
      2024: "102,685",
      2025: "276,686",
      2026: "448,120",
      2027: "707,961",
    },
    {
      rowName: "Costs of Goods Sold",
      2022: "77,178",
      2023: "17,888",
      2024: "71,256",
      2025: "188,526",
      2026: "297,737",
      2027: "458,864",
    },
    {
      rowName: "Operating Income",
      2022: "109,397",
      2023: "385",
      2024: "31,429",
      2025: "88,160",
      2026: "150,383",
      2027: "249,096",
    },
    {
      rowName: "SG&A",
      2022: "0",
      2023: "1,844",
      2024: "5,997",
      2025: "16,777",
      2026: "27,924",
      2027: "45,489",
    },
    {
      rowName: "EBITDA",
      2022: "-1,107,012",
      2023: "-1,459",
      2024: "25,432",
      2025: "71,383",
      2026: "122,459",
      2027: "203,607",
    },
    {
      rowName: "Other",
      2022: "0",
      2023: "-665",
      2024: "-8,963",
      2025: "-21,725",
      2026: "-34,605",
      2027: "-54,892",
    },
    {
      rowName: "NET income",
      2022: "-1,107,012",
      2023: "-2,124",
      2024: "16,470",
      2025: "49,658",
      2026: "87,854",
      2027: "148,715",
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
            // padding: "0.5rem 2.25rem",
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
