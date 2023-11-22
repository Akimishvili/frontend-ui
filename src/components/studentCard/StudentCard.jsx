import {Card, CardHeader, CardBody, CardFooter, Stack, Divider, Heading, Image, Button} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./StudentCard.module.css"
const {card_fluid_image} = styles
function StudentCard(props){
    const { student } = props
    const { id, first_name, last_name, email, phone, avatar} = student

    return (
        <Card>
            <CardHeader>
                <Image
                    src={avatar}
                    borderRadius='lg'
                    className={[card_fluid_image].join(" ")}
                />
            </CardHeader>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading as="h3" size='md'>{[first_name, last_name].join(" ")}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button colorScheme='telegram'>
                    <Link to={`/students/${id}`}>Show Student</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
export default StudentCard