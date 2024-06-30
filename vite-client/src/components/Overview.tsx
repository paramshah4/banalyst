import { Container, Image, Flex, Table } from "@mantine/core";
// import classes from "../styles/Overview.module.css";

export default function Overview() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container
      size="lg"
      display={"flex"}
      style={{
        justifyContent: "space-between",
      }}
    >
      <Container display={"flex"} style={{
        flexDirection: "row",
        margin: "0",
        justifyContent: "center",
        alignContent: "center"
      }}>
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
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div style={{
            margin: '10px',
          }}>Name of the Company</div>
          <div style={{
            margin: '10px',
          }}>Industry</div>
        </Flex>
      </Container>
      <Table
        style={{
          width: "40%",
        }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Historical</Table.Th>
            <Table.Th>Line item</Table.Th>
            <Table.Th>Forward</Table.Th>
            <Table.Th>Placeholder</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}
