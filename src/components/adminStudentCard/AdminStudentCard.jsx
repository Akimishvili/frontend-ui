import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
    Divider,
    Heading,
    Image,
    ButtonGroup,
    Button
} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from '../../config.js'
import styles from './AdminStudentCard.module.css'
const  {admin_card_image, space_between} = styles
const imageClasses = [admin_card_image]
function AdminStudentCard(props){
    const { student, students, setStudents } = props
    const { id, first_name, last_name, email, phone, avatar} = student

    async function destroyStudent(id) {
        if(confirm('do you want to destroy this student')){
            const url = [BACKEND_API_URL, 'students', id].join('/')
            const response = await axios.delete(url)
            if (response.status === 204){
                setStudents(students.filter((student) => student.id !== id))
            }
        }
    }
    return (
        <Card >
            <CardHeader py={2} px={4}>
                <Image
                    src={avatar}
                    borderRadius='lg'
                    className={imageClasses.join(' ')}
                />
            </CardHeader>
            <CardBody py={2} px={4}>
                <Stack mt='6' spacing='3' style={{'--chakra-space-6': '0.5rem'}}>
                    <Heading as="h3" size='md'>{[first_name, last_name].join(" ")}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup className={[space_between].join(" ")}>
                    <Button bg={"orange.400"}>
                        <Link to="/admin/students/1/edit">
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </Link>
                    </Button>
                    <Button bg={"red.500"} onClick={() => destroyStudent(id)}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </Button>
                </ButtonGroup>


            </CardFooter>
        </Card>
    )
}
export default AdminStudentCard