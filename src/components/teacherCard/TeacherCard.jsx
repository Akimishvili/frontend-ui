import {Card, CardHeader, CardBody, CardFooter, Stack, Divider, Heading, Image} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./TeacherCard.module.css"
const {card_image_fluid} = styles
function TeacherCard(props){
    const { teacher } = props
    const { id, first_name, last_name, email, phone, avatar} = teacher
    return (
        <Card>
            <CardHeader>
                <Image
                    src={avatar}
                    borderRadius='lg'
                    className={[card_image_fluid].join(" ")}
                />
            </CardHeader>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading as="h3" size='md'>{[first_name, last_name].join(" ")}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link to={`/teachers/${id}`}>Show Teacher</Link>
            </CardFooter>
        </Card>
    )
}
export default TeacherCard