import {Container, SimpleGrid, Box} from "@chakra-ui/react";
import TeacherCard from "../components/teacherCard/TeacherCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
function TeachersPage(){
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        (async()=>{
            const response = await axios.get("https://backend-dashboard.store/api/v1/teachers")
            const {data} = response.data
            setTeachers(data)
        })()
    }, []);
    return (
        <main className='main-section'>
            <Container  maxW="4xl">
                <SimpleGrid columns={3} spacing={10}>
                    {teachers.map((teacher) =>
                        (<Box key={crypto.randomUUID()}>
                            <TeacherCard teacher={teacher}/>
                        </Box>)
                    )}
                </SimpleGrid>
            </Container>
        </main>
    )
}
export default TeachersPage