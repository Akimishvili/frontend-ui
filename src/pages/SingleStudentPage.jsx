import {Container, Box, SimpleGrid, Spinner } from '@chakra-ui/react'
import {useParams} from "react-router-dom";
import StudentCard from "../components/studentCard/StudentCard.jsx";
import {useEffect, useState} from "react";
import {BACKEND_API_URL} from "../config.js";
import axios from "axios";
function SingleStudentPage(){
    const {id} = useParams()
    const [student, setStudent] = useState(null)
    useEffect(()=>{
        (async() => {
            const url = [BACKEND_API_URL, "students", id].join("/")
            const response = await axios.get(url)
            const {data} = response.data
            setStudent(data)
        })()
    }, [id])
    return(
        <Container>
            <SimpleGrid column={1} spacing='40px'>
                <Box>
                    {  student ? (
                        <StudentCard student={student}/>
                    ) : <Spinner />
                    }
                </Box>
            </SimpleGrid>
        </Container>
    )
}

export default SingleStudentPage