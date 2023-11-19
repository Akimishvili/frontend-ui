import {Container, Box, SimpleGrid, Spinner } from '@chakra-ui/react'
import {useParams} from "react-router-dom";
import TeacherCard from "../components/teacherCard/TeacherCard.jsx";
import {useEffect, useState} from "react";
import {BACKEND_API_URL} from "../config.js";
import axios from "axios";
function SingleTeacherPage(){
    const {id} = useParams()
    const [teacher, setTeacher] = useState(null)
    useEffect(()=>{
        (async() => {
            const url = [BACKEND_API_URL, "teachers", id].join("/")
            const response = await axios.get(url)
            const {data} = response.data
            setTeacher(data)
        })()
    }, [id])
    return(
        <Container>
            <SimpleGrid column={1} spacing='40px'>
                <Box>
                    {  teacher ? (
                        <TeacherCard teacher={teacher}/>
                    ) : <Spinner />
                    }
                </Box>
            </SimpleGrid>
        </Container>
    )
}

export default SingleTeacherPage