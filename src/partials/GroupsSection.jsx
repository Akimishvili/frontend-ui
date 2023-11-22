import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, SimpleGrid, Heading} from "@chakra-ui/react";
import GroupCard from "../components/groupCard/index.js";
import AdminGroupCard from "../components/adminGroupCard/AdminGroupCard.jsx";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
function GroupsSection(props){
    const [groups, setGroups] = useState([])
    const {title, is_dashboard, columns} = props
    useEffect(() => {
        (async()=>{
            const response = await axios.get([BACKEND_API_URL, 'groups'].join("/"))
            const {data} = response.data
            setGroups(data)
        })()
    }, []);
    return (
        <Container  maxW="4xl" p={4}>
            {title ? <Heading as='h3' size='md' noOfLines={1} pb={4}> { title } </Heading> : null}
            <SimpleGrid columns={columns} spacing={10}>
                {groups.map((group) =>
                    (<Box key={crypto.randomUUID()}>
                        {is_dashboard ? <AdminGroupCard group={group}/>  : <GroupCard group={group}/>}
                    </Box>)
                )}
            </SimpleGrid>
        </Container>
    )
}

export default GroupsSection