import { Container } from "@mantine/core";
// import classes from '../styles/DashboardContainer.module.css';
import Overview from "./Overview";
import SubHeader from "./SubHeader";
import { FooterLinks } from "./FooterLinks";
import DataView from "./DataView";
import BalanceSheet from "./BalanceSheet";

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
            <BalanceSheet />
            <FooterLinks />
        </Container>
    )
}