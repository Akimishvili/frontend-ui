import {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {BACKEND_API_URL} from "../config.js";
import axios from "axios";
import StudentCard from "../components/studentCard/StudentCard.jsx";
import {Heading} from "@chakra-ui/react";
function StudentsSlider(){
    const [students, setStudents] = useState([])
    useEffect(() => {
        (async() => {
            const url = [BACKEND_API_URL, 'students'].join("/")
            const response = await axios.get(url)
            const {data} = response.data
            setStudents(data)
        })()
    }, [])
    return(
        <>
            <Heading as='h2' size='lg' noOfLines={1}>
                Students
            </Heading>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {students.map((student)=>(
                    <SwiperSlide key={crypto.randomUUID()}>
                        <StudentCard student={student}/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}
export default StudentsSlider