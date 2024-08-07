import { Container } from "@mantine/core";
// import classes from '../styles/DashboardContainer.module.css';
import Overview from "./Overview";
import SubHeader from "./SubHeader";
import { FooterLinks } from "./FooterLinks";
import DataView from "./DataView";
import BalanceSheet, {mockBalanceSheetData } from "./BalanceSheet";
import IncomeStatement from "./IncomeStatement";
import CashFlow from "./CashFlowStatement";
import CorpStructure from "./CorpStructure";
import CapTable from "./CapTable";
import ManagementBackground from "./ManagementBackground";

export default function DashboardContainer() {
    
    return (
        <Container size="xl" style={{
            padding: '0',
            margin: '2.5em 0 0 0',
            maxWidth: '100%',
            background: '#FFFFFF'
        }}>
            <Overview />
            <SubHeader />
            <DataView />
            <BalanceSheet data={mockBalanceSheetData} />
            <IncomeStatement />
            <CashFlow />
            <CorpStructure />
            <CapTable />
            <ManagementBackground />
            <FooterLinks />
        </Container>
    )
}