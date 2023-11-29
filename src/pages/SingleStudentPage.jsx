import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Box, Spinner, Heading, Center} from '@chakra-ui/react'
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import SingleCollege from "../components/singleCollege/index.js";
import SingleGroup from "../components/singleGroup/SingleGroup.jsx";
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
    if(!student) return <Center><Spinner size='xl' /></Center>
    const {college, groups} = student

    return (
        <Container>
            <Box my={4}>
                <StudentInfoCard student={student}/>
            </Box>
            <Box my={4}>
                <Heading size='md' my={3} style={{display: "flex", gap: "1rem"}}>
                        <span className="material-symbols-outlined">
                            school
                        </span>
                    <span className="heading">
                             College
                        </span>
                </Heading>
                 <SingleCollege college={college} />
            </Box>
            {groups.length ? (
                <Box my={4}>
                    <Heading size='md' my={3}>
                        <span className="material-symbols-outlined">
                            school
                        </span>
                        <span className="heading">
                             Group
                        </span>
                    </Heading>
                    <SingleGroup group={groups[0]}/>
                </Box>) : null
            }

        </Container>
    )
}
export default SingleStudentPage;