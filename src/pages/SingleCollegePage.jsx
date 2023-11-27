import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Box, Spinner, Heading} from '@chakra-ui/react'
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import ProfessionCard from "../components/professionCard/ProfessionCard.jsx";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const styles = {
    display: 'flex',
    gap: '1rem',
    marginBlock: '0.5rem'
}


function SingleCollegePage(){
    const [college, setCollege] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        (async() => {
            const url = [BACKEND_API_URL, "colleges", id].join("/")
            const response = await axios.get(url)
            const {data} = response.data
            setCollege(data)
        })()
    }, [id]);

    if(!college) return <Spinner />
    const {professions} = college
    return (
        <Container>
            <Box>
                <Heading size='md' style={styles}>
                    Name: {college.name}
                </Heading>
                <Heading size='md' style={styles}>
                    Address: {college.address}
                </Heading>
            </Box>
            <Box my={4}>
                <Box my={4}>
                    <Heading size='md' style={styles}>
                    <span className="material-symbols-outlined">
                          engineering
                    </span>
                        <span className="heading">
                             Professions List
                        </span>
                    </Heading>
                </Box>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="swiper-container"
                    flex={1}
                >
                    {
                        professions.map((profession) => (
                            <SwiperSlide key={crypto.randomUUID()}>
                                <ProfessionCard profession={profession}  style={{ boxShadow: 'none' }} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Container>
    )
}
export default SingleCollegePage;