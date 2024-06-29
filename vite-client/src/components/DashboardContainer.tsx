import { Container } from "@mantine/core";
import classes from '../styles/DashboardContainer.module.css';
import Overview from "./Overview";

export default function DashboardContainer() {
    return (
        <Container>
            <Overview />
            Dashboard
        </Container>
    )
}