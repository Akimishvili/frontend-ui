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
import styles from './AdminTeacherCard.module.css'
const  {admin_card_image, space_between} = styles
const imageClasses = [admin_card_image]
function AdminTeacherCard(props){
    const { teacher, teachers, setTeachers } = props
    const { id, first_name, last_name, email, phone, avatar} = teacher

    async function destroyTeacher(id) {
        if(confirm('do you want to destroy this teacher?')){
            const url = [BACKEND_API_URL, 'teachers', id].join('/')
            const response = await axios.delete(url)
            setTeachers(teachers.filter((teacher) => teacher.id !== id))
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
                <ButtonGroup className={[space_between].join(" ")} >
                    <Button bg={"orange.400"}>
                        <Link to={`/admin/teachers/${id}/edit`}>
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </Link>
                    </Button>
                    <Button bg={"red.400"} onClick={() => destroyTeacher(id)}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </Button>
                </ButtonGroup>


            </CardFooter>
        </Card>
    )
}
export default AdminTeacherCard