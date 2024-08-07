"use client";
import React, {useEffect, useState} from "react";
import { Table, Title, Text } from "@mantine/core";


interface BalanceSheetItem {
  name: string;
  PFIL: number;
  GeminiFilmUK: number;
  Chandigarh: number;
  consolidationAdjustments: number;
  total2011: number;
  total2010: number;
  total2009: number;
}

interface BalanceSheetData {
  assets: {
    nonCurrentAssets: BalanceSheetItem[];
    currentAssets: BalanceSheetItem[];
  };
  equity: BalanceSheetItem[];
  liabilities: {
    currentLiabilities: BalanceSheetItem[];
    nonCurrentLiabilities: BalanceSheetItem[];
  };
}

export const mockBalanceSheetData: BalanceSheetData = {
  assets: {
    nonCurrentAssets: [
      {
        name: "Intangible Assets",
        PFIL: 1000000,
        GeminiFilmUK: 500000,
        Chandigarh: 250000,
        consolidationAdjustments: -100000,
        total2011: 1650000,
        total2010: 1500000,
        total2009: 1400000,
      },
      {
        name: "Property, plant and equipment",
        PFIL: 2000000,
        GeminiFilmUK: 1000000,
        Chandigarh: 500000,
        consolidationAdjustments: 0,
        total2011: 3500000,
        total2010: 3200000,
        total2009: 3000000,
      },
      {
        name: "Deferred tax assets",
        PFIL: 100000,
        GeminiFilmUK: 50000,
        Chandigarh: 25000,
        consolidationAdjustments: 0,
        total2011: 175000,
        total2010: 150000,
        total2009: 125000,
      },
      {
        name: "Other assets",
        PFIL: 300000,
        GeminiFilmUK: 150000,
        Chandigarh: 75000,
        consolidationAdjustments: 0,
        total2011: 525000,
        total2010: 500000,
        total2009: 475000,
      },
      {
        name: "Available for sale investments",
        PFIL: 500000,
        GeminiFilmUK: 250000,
        Chandigarh: 125000,
        consolidationAdjustments: 0,
        total2011: 875000,
        total2010: 800000,
        total2009: 750000,
      },
    ],
    currentAssets: [
      {
        name: "Inventory",
        PFIL: 1500000,
        GeminiFilmUK: 750000,
        Chandigarh: 375000,
        consolidationAdjustments: 0,
        total2011: 2625000,
        total2010: 2500000,
        total2009: 2400000,
      },
      {
        name: "Trade and other receivables",
        PFIL: 2500000,
        GeminiFilmUK: 1250000,
        Chandigarh: 625000,
        consolidationAdjustments: -200000,
        total2011: 4175000,
        total2010: 4000000,
        total2009: 3800000,
      },
      {
        name: "Cash and cash equivalents",
        PFIL: 1000000,
        GeminiFilmUK: 500000,
        Chandigarh: 250000,
        consolidationAdjustments: 0,
        total2011: 1750000,
        total2010: 1600000,
        total2009: 1500000,
      },
    ],
  },
  equity: [
    {
      name: "Share capital",
      PFIL: 5000000,
      GeminiFilmUK: 2500000,
      Chandigarh: 1250000,
      consolidationAdjustments: -3750000,
      total2011: 5000000,
      total2010: 5000000,
      total2009: 5000000,
    },
    {
      name: "Share premium",
      PFIL: 1000000,
      GeminiFilmUK: 500000,
      Chandigarh: 250000,
      consolidationAdjustments: -750000,
      total2011: 1000000,
      total2010: 1000000,
      total2009: 1000000,
    },
    {
      name: "Translation reserve",
      PFIL: 100000,
      GeminiFilmUK: 50000,
      Chandigarh: 25000,
      consolidationAdjustments: 0,
      total2011: 175000,
      total2010: 150000,
      total2009: 125000,
    },
    {
      name: "Fair value reserve",
      PFIL: 200000,
      GeminiFilmUK: 100000,
      Chandigarh: 50000,
      consolidationAdjustments: 0,
      total2011: 350000,
      total2010: 300000,
      total2009: 250000,
    },
    {
      name: "Retained earnings",
      PFIL: 3000000,
      GeminiFilmUK: 1500000,
      Chandigarh: 750000,
      consolidationAdjustments: -1000000,
      total2011: 4250000,
      total2010: 3800000,
      total2009: 3500000,
    },
  ],
  liabilities: {
    currentLiabilities: [
      {
        name: "Borrowings",
        PFIL: 1000000,
        GeminiFilmUK: 500000,
        Chandigarh: 250000,
        consolidationAdjustments: 0,
        total2011: 1750000,
        total2010: 1600000,
        total2009: 1500000,
      },
      {
        name: "Trade and other payables",
        PFIL: 2000000,
        GeminiFilmUK: 1000000,
        Chandigarh: 500000,
        consolidationAdjustments: -200000,
        total2011: 3300000,
        total2010: 3100000,
        total2009: 3000000,
      },
      {
        name: "Amounts due to parent company",
        PFIL: 0,
        GeminiFilmUK: 500000,
        Chandigarh: 250000,
        consolidationAdjustments: -750000,
        total2011: 0,
        total2010: 0,
        total2009: 0,
      },
      {
        name: "Current tax liabilities",
        PFIL: 300000,
        GeminiFilmUK: 150000,
        Chandigarh: 75000,
        consolidationAdjustments: 0,
        total2011: 525000,
        total2010: 500000,
        total2009: 475000,
      },
    ],
    nonCurrentLiabilities: [
      {
        name: "Borrowings > 1yr",
        PFIL: 3000000,
        GeminiFilmUK: 1500000,
        Chandigarh: 750000,
        consolidationAdjustments: 0,
        total2011: 5250000,
        total2010: 5000000,
        total2009: 4800000,
      },
      {
        name: "Other Payables",
        PFIL: 500000,
        GeminiFilmUK: 250000,
        Chandigarh: 125000,
        consolidationAdjustments: 0,
        total2011: 875000,
        total2010: 800000,
        total2009: 750000,
      },
      {
        name: "Deferred tax liability",
        PFIL: 200000,
        GeminiFilmUK: 100000,
        Chandigarh: 50000,
        consolidationAdjustments: 0,
        total2011: 350000,
        total2010: 300000,
        total2009: 275000,
      },
    ],
  },
};

const BalanceSheet = ({data}: {data: BalanceSheetData}) => {
  const [balanceSheetData, setbalanceSheetData] = useState<BalanceSheetData | null>(null);
  
  useEffect(() => {
    setbalanceSheetData(data)
  }, [data]);

 const ths = (
    <Table.Tr>
      <Table.Th></Table.Th>
      <Table.Th>PFIL</Table.Th>
      <Table.Th>Consol. adjustments</Table.Th>
      <Table.Th>As at 31 March 2011 TOTAL</Table.Th>
      <Table.Th>As at 31 March 2010</Table.Th>
      <Table.Th>As at 31 March 2009</Table.Th>
    </Table.Tr>
  );
  const renderRow = (item: BalanceSheetItem, isSubItem: boolean = false) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        {isSubItem ? (
          <Text ml="md">{item.name}</Text>
        ) : (
          <strong>{item.name}</strong>
        )}
      </Table.Td>
      <Table.Td>{item.PFIL.toFixed(2)}</Table.Td>
      <Table.Td>{item.consolidationAdjustments.toFixed(2)}</Table.Td>
      <Table.Td>{item.total2011.toFixed(2)}</Table.Td>
      <Table.Td>{item.total2010.toFixed(2)}</Table.Td>
      <Table.Td>{item.total2009.toFixed(2)}</Table.Td>
    </Table.Tr>
  );


  console.log('data: ', mockBalanceSheetData)
  return (
    <>
      <Title order={2}>Balance Sheet</Title>
      <Table withColumnBorders withTableBorder withRowBorders highlightOnHover>
        <Table.Thead>{ths}</Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <strong>ASSETS</strong>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <strong>Non-current assets</strong>
            </Table.Td>
          </Table.Tr>
          {balanceSheetData?.assets.nonCurrentAssets.map((item) =>
            renderRow(item, true)
          )}
          <Table.Tr>
            <Table.Td>
              <strong>Current assets</strong>
            </Table.Td>
          </Table.Tr>
          {balanceSheetData?.assets.currentAssets.map((item) =>
            renderRow(item, true)
          )}
          <Table.Tr>
            <Table.Td>
              <strong>Total Assets</strong>
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Td>
              <strong>EQUITY</strong>
            </Table.Td>
          </Table.Tr>
          {balanceSheetData?.equity.map((item) => renderRow(item))}

          <Table.Tr>
            <Table.Td>
              <strong>LIABILITIES</strong>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <strong>Current liabilities</strong>
            </Table.Td>
          </Table.Tr>
          {balanceSheetData?.liabilities.currentLiabilities.map((item) =>
            renderRow(item, true)
          )}
          <Table.Tr>
            <Table.Td>
              <strong>Non-current liabilities</strong>
            </Table.Td>
          </Table.Tr>
          {balanceSheetData?.liabilities.nonCurrentLiabilities.map((item) =>
            renderRow(item, true)
          )}

          <Table.Tr>
            <Table.Td>
              <strong>Total equity and liabilities</strong>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
};

export default BalanceSheet;
