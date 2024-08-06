"use client";
import { Table, Title } from "@mantine/core";

interface CapTableItem {
  name: string;
  title: string;
  commonStock: number;
  seriesAPreferred: number;
  seriesBPreferred: number;
  commonEquivalent: number;
  fullDilutedPercentOwned: number;
}

interface totalTableItem {
    name: string;
    commonStock: number;
    seriesAPreferred: number;
    seriesBPreferred: number;
    commonEquivalent: number;
    fullDilutedPercentOwned: number;
}
interface CapTableData {
  firstShareholder: CapTableItem[];
  secondShareholder: CapTableItem[];
  thirdShareholder: CapTableItem[];
  fourthShareholder: CapTableItem[];
  fifthShareholder: CapTableItem[];
  sixthShareholder: CapTableItem[];
  seventhShareholder: CapTableItem[];
  eigthShareholder: CapTableItem[];
  ninthShareholder: CapTableItem[];
  tenthShareholder: CapTableItem[];
  eleventhShareholder: CapTableItem[];
  total: totalTableItem[];
}

export default function CapTable() {
  const mockCapTableData: CapTableData = {
    firstShareholder: [
      { name: "First Shareholder", title: "CEO", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    secondShareholder: [
      { name: "Second Shareholder", title: "CFO", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    thirdShareholder: [
      { name: "Third Shareholder", title: "COO", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    fourthShareholder: [
      { name: "Fourth Shareholder", title: "Officer", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    fifthShareholder: [
      { name: "Fifth Shareholder", title: "Officer", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    sixthShareholder: [
      { name: "Sixth Shareholder", title: "Officer", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    seventhShareholder: [
      { name: "Seventh Shareholder", title: "Officer", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    eigthShareholder: [
      { name: "Eighth Shareholder", title: "Investor", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    ninthShareholder: [
      { name: "Ninth Shareholder", title: "Investor", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    tenthShareholder: [
      { name: "Tenth Shareholder", title: "Investor", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    eleventhShareholder: [
      { name: "Eleventh Shareholder", title: "Investor", commonStock: 1200000, seriesAPreferred: 2500000, seriesBPreferred: 3000000, commonEquivalent: 1200000, fullDilutedPercentOwned: 8.8 },
    ],
    total: [
        {
            name: "Total",
            commonStock: 13200000,
            seriesAPreferred: 27500000,
            seriesBPreferred: 33000000,
            commonEquivalent: 13200000,
            fullDilutedPercentOwned: 100
        }
    ]
  };
  const ths = (
    <Table.Tr style={{ borderBottom: "1px solid black" }}>
      <Table.Th>Shareholder</Table.Th>
      <Table.Th>Title</Table.Th>
      <Table.Th>Common Stock</Table.Th>
      <Table.Th>Series A Preferred</Table.Th>
      <Table.Th>Series B Preferred</Table.Th>
      <Table.Th>Common Equivalent</Table.Th>
      <Table.Th>Full Diluted % Owned</Table.Th>
    </Table.Tr>
  );


  const renderRow = (item: CapTableItem) => (
    <Table.Tr>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.title}</Table.Td>
      <Table.Td>{item.commonStock}</Table.Td>
      <Table.Td>{item.seriesAPreferred}</Table.Td>
      <Table.Td>{item.seriesBPreferred}</Table.Td>
      <Table.Td>{item.commonEquivalent}</Table.Td>
      <Table.Td>{item.fullDilutedPercentOwned}</Table.Td>
    </Table.Tr>
  );

  const renderTotalRow = (item: totalTableItem) => (
    <Table.Tr>
      <Table.Th style={{ borderTop: "1px solid black", borderRight: "none" }}>{item.name}</Table.Th>
      <Table.Th style={{ borderTop: "1px solid black" }}></Table.Th>
      <Table.Th style={{ borderTop: "1px solid black" }}>{item.commonStock}</Table.Th>
      <Table.Th style={{ borderTop: "1px solid black" }}>{item.seriesAPreferred}</Table.Th>
      <Table.Th style={{ borderTop: "1px solid black" }}>{item.seriesBPreferred}</Table.Th>
      <Table.Th style={{ borderTop: "1px solid black" }}>{item.commonEquivalent}</Table.Th>
      <Table.Th style={{ borderTop: "1px solid black" }}>{item.fullDilutedPercentOwned}</Table.Th>
    </Table.Tr>
  );

  return (
    <>
      <Title order={2}>Cap Table</Title>
      <Table withColumnBorders withTableBorder withRowBorders highlightOnHover>
        <Table.Thead>{ths}</Table.Thead>
        <Table.Tbody>
          {mockCapTableData.firstShareholder.map((item) => renderRow(item))}
          {mockCapTableData.secondShareholder.map((item) => renderRow(item))}
          {mockCapTableData.thirdShareholder.map((item) => renderRow(item))}
          {mockCapTableData.fourthShareholder.map((item) => renderRow(item))}
          {mockCapTableData.fifthShareholder.map((item) => renderRow(item))}
          {mockCapTableData.sixthShareholder.map((item) => renderRow(item))}
          {mockCapTableData.seventhShareholder.map((item) => renderRow(item))}
          {mockCapTableData.eigthShareholder.map((item) => renderRow(item))}
          {mockCapTableData.ninthShareholder.map((item) => renderRow(item))}
          {mockCapTableData.tenthShareholder.map((item) => renderRow(item))}
          {mockCapTableData.eleventhShareholder.map((item) => renderRow(item))}
          {mockCapTableData.total.map((item) => renderTotalRow(item))}
        </Table.Tbody>
      </Table>
    </>
  );
}
