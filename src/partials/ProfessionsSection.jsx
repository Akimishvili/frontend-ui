import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, SimpleGrid, Heading} from "@chakra-ui/react";
import ProfessionCard from "../components/professionCard/ProfessionCard.jsx";
import AdminProfessionCard from "../components/adminProfessionCard/AdminProfessionCard.jsx";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
function ProfessionsSection(props){
    const [professions, setProfessions] = useState([])
    const {title, is_dashboard, columns} = props
    useEffect(() => {
        (async()=>{
            const response = await axios.get([BACKEND_API_URL, 'professions'].join("/"))
            const {data} = response.data
            setProfessions(data)
        })()
    }, []);
    return (
        <Container  maxW="4xl" p={4}>
            {title ? <Heading as='h3' size='md' noOfLines={1} pb={4}> { title } </Heading> : null}
            <SimpleGrid columns={columns} spacing={10}>
                {professions.map((profession) =>
                    (<Box key={crypto.randomUUID()}>
                        {
                            is_dashboard ? <AdminProfessionCard profession={profession}/>
                                :
                                <ProfessionCard profession={profession}/>
                        }
                    </Box>)
                )}
            </SimpleGrid>
        </Container>
    )
}

export default ProfessionsSection