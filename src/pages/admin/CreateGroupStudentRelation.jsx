import {
    FormControl
    , Input, Button, Select, Alert, AlertIcon,
} from '@chakra-ui/react'
import {useState, useRef, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";

function CreateGroupStudentRelation(){
    const [info, setInfo] = useState(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [relation, setRelation] = useState({
        student_id: "",
        group_id: ""
    })
    const [students, setStudents] = useState([])
    const [groups, setGroups] = useState([])
    useEffect(() => {
        (async() =>{
            const studentsUrl = [BACKEND_API_URL, 'students'].join("/")
            const studentsResponse = await fetch(studentsUrl)
            if (studentsResponse.ok){
                const studentsResource  = await studentsResponse.json()
                setStudents(studentsResource.data)
            }
            const groupsUrl = [BACKEND_API_URL, 'groups'].join("/")
            const groupsResponse = await fetch(groupsUrl)
            if(groupsResponse.ok){
                const groupsResource = await groupsResponse.json()
                setGroups(groupsResource.data)
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
        const response = await fetch([BACKEND_API_URL, 'student-group'].join('/'), {
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
                    <Select placeholder='Select Student' value={relation.student_id} name="student_id" onChange={changeFormHandler}>
                        {students.map((student) =>
                            (<option value={student.id} key={crypto.randomUUID()}>
                                {[student.first_name, student.last_name].join(' ')}
                            </option>)
                        )}

                    </Select>
                </FormControl>
                <FormControl my={2}>
                    <Select placeholder='Select Group' value={relation.group_id} name="group_id" onChange={changeFormHandler}>
                        {groups.map((group) => (
                            <option value={group.id} key={crypto.randomUUID()}>{group.number}</option>
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

export default CreateGroupStudentRelation