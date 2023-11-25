import {
    FormControl
    , Input, Button, Select, Alert, AlertIcon,
} from '@chakra-ui/react'
import {useState, useRef, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";

function CreateTeacherCollegeRelation(){
    const [info, setInfo] = useState(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [relation, setRelation] = useState({
        teacher_id: "",
        college_id: ""
    })
    const [teachers, setTeachers] = useState([])
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        (async() =>{
            const teachersUrl = [BACKEND_API_URL, 'teachers'].join("/")
            const teachersResponse = await fetch(teachersUrl)
            if (teachersResponse.ok){
                const teacherResource  = await teachersResponse.json()
                setTeachers(teacherResource.data)
            }
            const collegesUrl = [BACKEND_API_URL, 'colleges'].join("/")
            const collegesResponse = await fetch(collegesUrl)
            if(collegesResponse.ok){
                const collegesResource = await collegesResponse.json()
                setColleges(collegesResource.data)
            }
        })()
    }, []);
    const [disabled, setDisabled] = useState(false)
    function changeFormHandler(e){
        setRelation({
            ...relation,
            [e.target.name]: e.target.value
        })
    }
    async function storeRelation(e){
        e.preventDefault()
        setDisabled(true)
        const response = await fetch([BACKEND_API_URL, 'teacher-college'].join('/'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( relation )
        })
        if(response.ok) {
            const resource = await response.json();
            setInfo({
                status: "success",
                message: "relation successfully added"
            })
            createForm.current.reset()
            // setTimeout(() => {
            //     navigate("/admin/teachers")
            // }, 1500)
        }
    }
    return (
        <>
            {info ? <Alert status={info.status}>
                <AlertIcon />
                {info.message}
            </Alert> : null}

            <form onSubmit={storeRelation} ref={createForm}>
                <FormControl my={2}>
                    <Select placeholder='Select Teacher' value={relation.teacher_id} name="teacher_id" onChange={changeFormHandler}>
                        {teachers.map((teacher) =>
                            (<option value={teacher.id} key={crypto.randomUUID()}>
                                {[teacher.first_name, teacher.last_name].join(' ')}
                            </option>)
                        )}
                    </Select>
                </FormControl>
                <FormControl my={2}>
                    <Select placeholder='Select College' value={relation.college_id} name="college_id" onChange={changeFormHandler}>
                        {colleges.map((college) => (
                            <option value={college.id} key={crypto.randomUUID()}>{college.name}</option>
                        ))}

                    </Select>
                </FormControl>
                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    isDisabled={disabled}
                >
                    Store Relation
                </Button>
            </form>
        </>
    )
}

export default CreateTeacherCollegeRelation