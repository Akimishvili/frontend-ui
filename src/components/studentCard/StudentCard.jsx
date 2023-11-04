import {Card, CardHeader, CardBody, CardFooter, Stack, Divider, Heading, Image} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function StudentCard(props){
    const { student } = props
    const { id, first_name, last_name, email, phone, avatar} = student
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
                <Link to={`/students/${id}`}>Show Student</Link>
            </CardFooter>
        </Card>
    )
}
export default StudentCard