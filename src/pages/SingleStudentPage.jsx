import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Box, Spinner} from '@chakra-ui/react'
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import TeacherInfoCard from "../components/teacherInfoCard/index.js";
import StudentInfoCard from "../components/studentInfoCard/index.js";
function SingleStudentPage(){
    const [student, setStudent] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        (async() => {
            const url = [BACKEND_API_URL, "students", id].join("/")
            const response = await axios.get(url)
            const {data} = response.data
            setStudent(data)

        })()
    }, [id]);
    return (
        <Container>
            <Box>
                {student ? <StudentInfoCard student={student}/> : <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />}
            </Box>
        </Container>
    )
}
export default SingleStudentPage;