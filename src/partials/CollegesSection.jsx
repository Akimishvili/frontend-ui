import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, SimpleGrid, Heading} from "@chakra-ui/react";
import GroupCard from "../components/groupCard/index.js";
import AdminGroupCard from "../components/adminGroupCard/AdminGroupCard.jsx";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import AdminCollegeCard from "../components/adminCollegeCard/index.js";
import CollegeCard from "../components/collegeCard/index.js";
function CollegesSection(props){
    const [colleges, setColleges] = useState([])
    const {title, is_dashboard, columns} = props
    useEffect(() => {
        (async()=>{
            const response = await axios.get([BACKEND_API_URL, 'colleges'].join("/"))
            const {data} = response.data
            setColleges(data)
        })()
    }, []);
    return (
        <Container  maxW="4xl" p={4}>
            {title ? <Heading as='h3' size='md' noOfLines={1} pb={4}> { title } </Heading> : null}
            <SimpleGrid columns={columns} spacing={10}>
                {colleges.map((college) =>
                    (<Box key={crypto.randomUUID()}>
                        {is_dashboard ? <AdminCollegeCard college={college}/>  : <CollegeCard college={college}/>}
                    </Box>)
                )}
            </SimpleGrid>
        </Container>
    )
}

export default CollegesSection