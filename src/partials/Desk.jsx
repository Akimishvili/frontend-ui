import {Box, Card, CardBody, Container, SimpleGrid, Text, Heading, Grid, Kbd, Spinner} from "@chakra-ui/react";
import DeskCard from "../components/deskCard/index.js";
import {useEffect, useState} from "react";
import {BACKEND_LOCAL_URL} from "../config.js";
import axios from "axios";

function Desk(){
    const [tablesData, setTablesData] =  useState(null)
    useEffect(() => {
        (async() => {
            const url = [BACKEND_LOCAL_URL, "tables-data"].join("/")
            const response =  await axios.get(url)
            const {data} = response
            setTablesData(data)
        })()
    }, []);
    if(!tablesData) return <Spinner />
    const {teachersCount, studentsCount, groupsCount, professionsCount, collegesCount} = tablesData
    return (
        <Container px={0}>
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            >
                <Box p={4} borderRadius="md">
                    <DeskCard bgColor={'yellow.100'}>
                        <>
                            <span className="material-symbols-outlined">
                                cast_for_education
                            </span>
                            <Text>Teachers</Text>
                            <Kbd bg={'yellow.100'}>{teachersCount}</Kbd>
                        </>
                    </DeskCard>
                </Box>
                <Box p={4} borderRadius="md">
                    <DeskCard bgColor={'pink.100'}>
                        <>
                            <span className="material-symbols-outlined">
                                school
                            </span>
                            <Text>Students</Text>
                            <Kbd bg={'pink.100'}>{studentsCount}</Kbd>
                        </>
                    </DeskCard>
                </Box>
                <Box p={4} borderRadius="md">
                    <DeskCard bgColor={'purple.300'}>
                        <>
                             <span className="material-symbols-outlined">
                                groups
                             </span>
                            <Text>Groups</Text>
                            <Kbd bg={'purple.300'}>{groupsCount}</Kbd>
                        </>
                    </DeskCard>
                </Box>
                <Box p={4} borderRadius="md">
                    <DeskCard bgColor={'teal.400'}>
                        <>
                            <span className="material-symbols-outlined">
                                engineering
                            </span>
                            <Text>Professions</Text>
                            <Kbd bg={'teal.400'}>{professionsCount}</Kbd>
                        </>
                    </DeskCard>
                </Box>
                <Box p={4} borderRadius="md">
                    <DeskCard bgColor={'blue.500'}>
                        <>
                            <span className="material-symbols-outlined">
                                cast_for_education
                            </span>
                            <Text>Teachers</Text>
                            <Kbd bg={'blue.500'}>{collegesCount}</Kbd>
                        </>
                    </DeskCard>
                </Box>
            </Grid>
        </Container>
    )
}
export default Desk