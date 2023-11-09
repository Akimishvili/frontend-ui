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

function AdminTeacherCard(props){
    const { teacher } = props
    const { id, first_name, last_name, email, phone, avatar} = teacher
    return (
        <Card>
            <CardHeader>
                <Image
                    src={avatar}
                    borderRadius='lg'
                />
            </CardHeader>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading as="h3" size='md'>{[first_name, last_name].join(" ")}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup gap='4'>
                    <Button colorScheme='whiteAlpha'>
                        <Link to="/admin/teachers/1/edit">
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </Link>
                    </Button>
                    <Button colorScheme='blackAlpha'>
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