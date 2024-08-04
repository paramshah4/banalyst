"use client";
import { Table, Title } from "@mantine/core";

interface IncomeStatementItem {
  name: string;
  "2024": number;
  "2023": number;
}
interface IncomeStatementData {
  revenue: IncomeStatementItem[];
  costOfSales: IncomeStatementItem[];
  grossProfit: IncomeStatementItem[];
  operatingExpenses: IncomeStatementItem[];
  otherOperatingIncome: IncomeStatementItem[];
  interestIncome: IncomeStatementItem[];
  taxExpense: IncomeStatementItem[];
  netProfit: IncomeStatementItem[];
  basicEarningsPerShare: IncomeStatementItem[];
  dilutedEarningsPerShare: IncomeStatementItem[];
}

export default function IncomeStatement() {
  const mockIncomeStatementData: IncomeStatementData = {
    revenue: [{ name: "Revenue", "2024": 3240923132, "2023": 548465456 }],
    costOfSales: [{ name: "Cost of Sales", "2024": 456465, "2023": 56434 }],
    grossProfit: [{ name: "Gross Profit", "2024": 23456465, "2023": 231546 }],
    operatingExpenses: [
      {
        name: "Operating Expenses",
        "2024": 1400000,
        "2023": 123,
      },
    ],
    otherOperatingIncome: [
      {
        name: "Other Operating Income",
        "2024": 1339,
        "2023": 960,
      },
    ],
    interestIncome: [{ name: "Interest Income", "2024": 467985, "2023": 5567 }],
    taxExpense: [{ name: "Tax Expense", "2024": 312344, "2023": 56456 }],
    netProfit: [{ name: "Net Profit", "2024": 654765, "2023": 46456 }],
    basicEarningsPerShare: [
      {
        name: "Basic Earnings Per Share",
        "2024": 31,
        "2023": 24,
      },
    ],
    dilutedEarningsPerShare: [
      {
        name: "Diluted Earnings Per Share",
        "2024": 31,
        "2023": 24,
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

  const renderRow = (item: IncomeStatementItem) => (
    <Table.Tr key={item["name"]}>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item["2024"]}</Table.Td>
      <Table.Td>{item["2023"]}</Table.Td>
    </Table.Tr>
  );
  return (
    <>
      <Title order={2}>Income Statement</Title>
      <Table withColumnBorders withTableBorder withRowBorders highlightOnHover>
        <Table.Thead>{ths}</Table.Thead>
        <Table.Tbody>
          {mockIncomeStatementData.revenue.map((item) => renderRow(item))}
          {mockIncomeStatementData.costOfSales.map((item) => renderRow(item))}
          {mockIncomeStatementData.grossProfit.map((item) => renderRow(item))}
          {mockIncomeStatementData.operatingExpenses.map((item) =>
            renderRow(item)
          )}
          {mockIncomeStatementData.otherOperatingIncome.map((item) =>
            renderRow(item)
          )}
          {mockIncomeStatementData.interestIncome.map((item) =>
            renderRow(item)
          )}
          {mockIncomeStatementData.taxExpense.map((item) => renderRow(item))}
          {mockIncomeStatementData.netProfit.map((item) => renderRow(item))}
          {mockIncomeStatementData.basicEarningsPerShare.map((item) =>
            renderRow(item)
          )}
          {mockIncomeStatementData.dilutedEarningsPerShare.map((item) =>
            renderRow(item)
          )}
        </Table.Tbody>
      </Table>
    </>
  );
}
