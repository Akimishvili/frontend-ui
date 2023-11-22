import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Box, Spinner} from '@chakra-ui/react'
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../config.js";
import SingleGroup from "../components/singleGroup/SingleGroup.jsx";
function SingleGroupPage(){
    const [group, setGroup] = useState(null)
    const [profession, setProfession] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        (async() => {
            const groupResponse = await axios.get([BACKEND_API_URL, "groups", id].join("/"));
            const groupData = groupResponse.data;
            setGroup(groupData.data);
            // const professionResponse = await axios.get([BACKEND_LOCAL_URL, 'professions', group.profession_id].join("/"));
            // const professionData = professionResponse.data;
            // setProfession(professionData);
        })()
    }, [id]);
    useEffect(() => {
        if (group && group.profession_id) {
            ( async () => {
                    const professionResponse = await axios.get([BACKEND_API_URL, 'professions', group.profession_id].join("/"));
                    const professionData = professionResponse.data;
                    setProfession(professionData.data)}
            )()
    }}, [group]);
    return (
        <Container>
            <Box>
                {
                    group && profession ? <SingleGroup number={group.number} students={group.students} profession={profession}/> : null
                }
            </Box>
        </Container>
    )
}
export default SingleGroupPage;