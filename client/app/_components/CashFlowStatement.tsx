"use client";
import { Table, Title } from "@mantine/core";

interface CashFlowStatementItem {
  name: string;
  "2024": number;
  "2023": number;
}

interface CashFlowStatementData {
  operatingCashFlow: CashFlowStatementItem[];
  netCashFromOperatingActivities: CashFlowStatementItem[];
  investingCashFlow: CashFlowStatementItem[];
  netCashFromInvestingActivities: CashFlowStatementItem[];
  financingCashFlow: CashFlowStatementItem[];
  netCashFromFinancingActivities: CashFlowStatementItem[];
  increaseInCashAndCashEquivalents: CashFlowStatementItem[];
  cashAtBeginningOfPeriod: CashFlowStatementItem[];
  cashAtEndOfPeriod: CashFlowStatementItem[];
}
export default function CashFlow() {
  const mockCashFlowStatementData: CashFlowStatementData = {
    operatingCashFlow: [
      {
        name: "Cash Flows from operating activities",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    netCashFromOperatingActivities: [
      {
        name: "Net cash generated from operating activities",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    investingCashFlow: [
      {
        name: "Cash flows form investing activities",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    netCashFromInvestingActivities: [
      {
        name: "Net cash used in investing activities",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    financingCashFlow: [
      {
        name: "Cash flows from financing activities",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    netCashFromFinancingActivities: [
      {
        name: "Net cash generated from financing activities",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    increaseInCashAndCashEquivalents: [
      {
        name: "Increase in cash and cash equivalents",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    cashAtBeginningOfPeriod: [
      {
        name: "Cash and cash equivalents at the beginning of the year",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
    cashAtEndOfPeriod: [
      {
        name: "Cash and cash equivalents at the end of the year",
        "2024": 3240923132,
        "2023": 548465456,
      },
    ],
  };

  const ths = (
    <Table.Tr>
      <Table.Th></Table.Th>
      <Table.Th>As at 31 March 2024</Table.Th>
      <Table.Th>As at 31 March 2023</Table.Th>
    </Table.Tr>
  );

  const renderRow = (item: CashFlowStatementItem) => (
    <Table.Tr key={item["name"]}>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item["2024"]}</Table.Td>
      <Table.Td>{item["2023"]}</Table.Td>
    </Table.Tr>
  );
  return (
    <>
      <Title order={2}>Cash Flow Statement</Title>
      <Table withColumnBorders withTableBorder withRowBorders highlightOnHover>
        <Table.Thead>{ths}</Table.Thead>
        <Table.Tbody>
          {mockCashFlowStatementData.operatingCashFlow.map((item) =>
            renderRow(item)
          )}
          {mockCashFlowStatementData.netCashFromOperatingActivities.map(
            (item) => renderRow(item)
          )}
          {mockCashFlowStatementData.investingCashFlow.map((item) =>
            renderRow(item)
          )}
          {mockCashFlowStatementData.netCashFromInvestingActivities.map(
            (item) => renderRow(item)
          )}
          {mockCashFlowStatementData.financingCashFlow.map((item) =>
            renderRow(item)
          )}
          {mockCashFlowStatementData.netCashFromFinancingActivities.map(
            (item) => renderRow(item)
          )}
          {mockCashFlowStatementData.increaseInCashAndCashEquivalents.map(
            (item) => renderRow(item)
          )}
          {mockCashFlowStatementData.cashAtBeginningOfPeriod.map((item) =>
            renderRow(item)
          )}
          {mockCashFlowStatementData.cashAtEndOfPeriod.map((item) =>
            renderRow(item)
          )}
        </Table.Tbody>
      </Table>
    </>
  );
}
