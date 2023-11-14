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
    Button,
    filter
} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./AdminStudentCard.module.css"
import {BACKEND_API_URL} from "../../config.js";
const {card_fluid_image, space_between} = styles

function AdminStudentCard(props){
    const { student, students, setStudents } = props
    const { id, first_name, last_name, email, phone, avatar} = student
    const [disabled, setDisabled] = useState(false)
    async function destroyStudent(id){
        if(confirm("do you want to delete this student? 😏")){
            setDisabled(true)
            const url = [BACKEND_API_URL, 'students', id].join("/")
            const response = await axios.delete(url)
            if(response.status === 204){
                setStudents(students.filter((student) => student.id !== id))
            }
        }
    }
    return (
        <Card>
            <CardHeader>
                <Image
                    src={avatar}
                    borderRadius='lg'
                    className={[card_fluid_image].join(' ')}
                />
            </CardHeader>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading as="h3" size='md'>{[first_name, last_name].join(" ")}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup gap='4' className={[space_between].join(' ')}>
                    <Button bg={"yellow.500"}>
                        <Link to="/admin/teachers/1/edit">
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </Link>
                    </Button>
                    <Button bg={"red.500"} onClick={() => destroyStudent(id)} isDisabled={disabled}>
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