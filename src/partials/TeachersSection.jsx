import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, SimpleGrid, Heading} from "@chakra-ui/react";
import TeacherCard from "../components/teacherCard/TeacherCard.jsx";
import AdminTeacherCard from "../components/adminTeacherCard/index.js";
import {BACKEND_API_URL} from "../config.js";

function TeachersSection(props){
    const [teachers, setTeachers] = useState([])
    const {title, is_dashboard, columns} = props
    useEffect(() => {
        (async()=>{
            const response = await axios.get([BACKEND_API_URL, 'teachers'].join('/'))
            const {data} = response.data
            setTeachers(data)
        })()
    }, []);
    return (
            <Container  maxW="4xl" p={4}>
                {title ? <Heading as='h3' size='md' noOfLines={1} pb={4}> { title } </Heading> : null}
                <SimpleGrid columns={columns} spacing={10}>
                    {teachers.map((teacher) =>
                        (<Box key={crypto.randomUUID()}>
                            {is_dashboard ?  <AdminTeacherCard teacher={teacher}
                                                               teachers={teachers}
                                                               setTeachers={setTeachers}/> : <TeacherCard teacher={teacher}/> }
                        </Box>)
                    )}
                </SimpleGrid>
            </Container>
    )
}

export default TeachersSection