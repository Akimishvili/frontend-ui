import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Box, Spinner, Heading, Center} from '@chakra-ui/react'
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import TeacherInfoCard from "../components/teacherInfoCard/index.js";
import SingleGroup from "../components/singleGroup/SingleGroup.jsx";
import SingleCollege from "../components/singleCollege/index.js";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const styles = {
    display: 'flex',
    gap: '1rem',
    marginBlock: '0.5rem'
}


function SingleTeacherPage(){
    const [teacher, setTeacher] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        (async() => {
            const url = [BACKEND_API_URL, "teachers", id].join("/")
            const response = await axios.get(url)
            const {data} = response.data
            setTeacher(data)
        })()
    }, [id]);

    if(!teacher) return <Center><Spinner size='xl' /></Center>
    const {groups, colleges} = teacher
    return (
            <Container>
                <Box>
                    <TeacherInfoCard teacher={teacher}/>
                </Box>
                <Box my={4}>
                    <Heading size='md' style={styles}>
                        <span className="material-symbols-outlined">
                            groups
                        </span>
                        <span className="heading">
                             Groups List
                        </span>
                    </Heading>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="swiper-container"
                    >
                        {
                            groups.map((group) => (
                                <SwiperSlide key={crypto.randomUUID()}>
                                    <SingleGroup group={group}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
                <Box my={4}>
                    <Heading size='md' style={styles}>
                        <span className="material-symbols-outlined">
                            school
                        </span>
                        <span className="heading">
                             Colleges List
                        </span>
                    </Heading>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="swiper-container"
                        flex={1}
                    >
                        {
                            colleges.map((college) => (
                                <SwiperSlide key={crypto.randomUUID()} className={"teal-200"}>
                                    <SingleCollege college={college} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
            </Container>
        )
}
export default SingleTeacherPage;