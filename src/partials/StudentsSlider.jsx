
import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import StudentCard from "../components/studentCard/StudentCard.jsx";
import {Heading} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TeacherCard from "../components/teacherCard/TeacherCard.jsx";
function StudentsSlider (){
    const [students, setStudents] = useState([])
    useEffect(() => {
        (async()=>{
            const response = await axios.get([BACKEND_API_URL, 'students'].join("/"))
            const {data} = response.data
            setStudents(data)
        })()
    }, []);

    return(
        <>
            <Heading as='h3' size='md' noOfLines={1} pb={4}>Students Section</Heading>
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
                    students.map((student) => (
                        <SwiperSlide key={crypto.randomUUID()}>
                            <StudentCard student={student}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default StudentsSlider