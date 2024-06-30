import { Container } from "@mantine/core";
// import classes from '../styles/DashboardContainer.module.css';
import Overview from "./Overview";
import SubHeader from "./SubHeader";
import { FooterLinks } from "./FooterLinks";
import DataView from "./DataView";

export default function DashboardContainer() {
    return (
        <Container size="xl" style={{
            padding: '0',
            margin: '0',
            maxWidth: '100%',
            background: '#FFFFFF'
        }}>
            <Overview />
            <SubHeader />
            <DataView />
            <FooterLinks />
        </Container>
    )
}