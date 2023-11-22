import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Box, Spinner} from '@chakra-ui/react'
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import TeacherInfoCard from "../components/teacherInfoCard/index.js";
import SingleGroup from "../components/singleGroup/SingleGroup.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TeacherCard from "../components/teacherCard/TeacherCard.jsx";

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

    if(!teacher) return <Spinner />
    const {groups} = teacher
    return (
            <Container>
                <Box>
                    <TeacherInfoCard teacher={teacher}/>
                </Box>
                <Box>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
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
            </Container>
        )
}
export default SingleTeacherPage;