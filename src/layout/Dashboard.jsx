
import { Outlet } from "react-router-dom"
import {Box, Container, Grid, SimpleGrid} from '@chakra-ui/react'
import DashboardAccordion from "../components/dashboardAccordion/DashboardAccordion.jsx";
function Dashboard(){
    return (
        <Container maxW={"4xl"}>
            {/*<SimpleGrid columns={[1,2]} spacing={4} p={4}>*/}
            {/*    <Box bg="blue.200" p={4} borderRadius="md">*/}
            {/*        <DashboardAccordion />*/}
            {/*    </Box>*/}
            {/*    <Box bg="green.200" p={4} borderRadius="md">*/}
            {/*        <Outlet />*/}
            {/*    </Box>*/}
            {/*</SimpleGrid>*/}
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 3fr' }}
                gap={4}
                p={4}
            >
                <Box bg="blue.200" p={4} borderRadius="md">
                    <DashboardAccordion />
                </Box>
                <Box bg="green.200" p={4} borderRadius="md">
                    <Outlet />
                </Box>
            </Grid>
        </Container>
    )
}
export default Dashboard