
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import TeacherCard from "../components/teacherCard/TeacherCard.jsx";
import {Box, Heading} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function TeachersSlider (){

    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        (async()=>{
            const response = await axios.get([BACKEND_API_URL, 'teachers'].join("/"))
            const {data} = response.data
            setTeachers(data)
        })()
    }, []);

    return(
        <>
            <Heading as='h3' size='md' noOfLines={1} pb={4}>Teachers Section</Heading>
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
                   teachers.map((teacher) => (
                       <SwiperSlide key={crypto.randomUUID()}>
                            <TeacherCard teacher={teacher}/>
                       </SwiperSlide>
                   ))
                }
            </Swiper>
        </>
    )
}

export default TeachersSlider