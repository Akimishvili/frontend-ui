import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, SimpleGrid, Heading} from "@chakra-ui/react";
import StudentCard from "../components/studentCard/StudentCard.jsx";
import AdminStudentCard from "../components/adminStudentCard/AdminStudentCard.jsx";
function StudentsSection(props){
    const {title, is_dashboard, columns} = props
    const [students, setStudents] = useState([])
   console.log(props)
    useEffect(() => {
        (async()=>{
            const response = await axios.get("https://backend-dashboard.store/api/v1/students")
            const {data} = response.data
            setStudents(data)
        })()
    }, []);
    return (
        <Container  maxW="4xl" p={4}>
            {title ? <Heading as='h3' size='md' noOfLines={1} pb={4}> { title } </Heading> : null}
            <SimpleGrid columns={columns} spacing={10}>
                {students.map((student) =>
                    (<Box key={crypto.randomUUID()}>
                        {is_dashboard ? <AdminStudentCard student={student}
                                                          students={students}
                                                          setStudents={setStudents}  /> :  <StudentCard student={student}/>}

                    </Box>)
                )}
            </SimpleGrid>
        </Container>
    )
}

export default StudentsSection