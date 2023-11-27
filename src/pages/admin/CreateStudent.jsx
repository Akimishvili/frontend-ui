import {
    FormControl
    , Input, Button, Select, Alert, AlertIcon
} from '@chakra-ui/react'
import {useState, useRef, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";

function CreateStudent(){
    const [info, setInfo] = useState(null)
    const [colleges, setColleges] = useState([])
    const avatar = useRef(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [student, setStudent] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        identifier: "",
        college_id: "",
        visible: "1"
    })
    useEffect(()=>{
        (async () => {
            const url = [BACKEND_API_URL, "colleges"].join("/")
            const response = await axios.get(url)
            if(response.status === 200){
                const {data} = response.data
                setColleges(data)
            }
        })()
    },[])
    const [disabled, setDisabled] = useState(false)
    function changeFormHandler(e){
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    async function storeStudent(e){
        e.preventDefault()
        setDisabled(true)
        const formData = new FormData()
        formData.append('first_name', student.first_name)
        formData.append('last_name', student.last_name)
        formData.append('email', student.email)
        formData.append('phone', student.phone)
        formData.append('identifier', student.identifier)
        formData.append('college_id', student.college_id)
        formData.append('visible', student.visible)
        formData.append('avatar', avatar.current.files[0])
        const response = await fetch(`${BACKEND_API_URL}/students`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        if(response.ok) {
            const resource = await response.json();
            setInfo({
                status: "success",
                message: "teacher successfully added"
            })
            createForm.current.reset()
            setTimeout(() => {
                navigate("/admin/students")
            }, 1500)

        }
        // const response = await axios.post('http://127.0.0.1:8000/api/v1/teachers', JSON.stringify(teacher),{
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        // console.log(response)
    }
    return (
        <>
            {info ? <Alert status={info.status}>
                <AlertIcon />
                {info.message}
            </Alert> : null}


            <form onSubmit={storeStudent} ref={createForm}>
                <FormControl my={2}>
                    <Input type='text' placeholder="First Name" name="first_name" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='text' placeholder="Last Name" name="last_name" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='email' placeholder="Email" name="email" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='text' placeholder="Phone" name="phone" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='text' placeholder="Identifier" pattern={'^.{11}$'} name="identifier" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='file' placeholder="Phone" name="avatar" pt={'0.25rem'} ref={avatar}/>
                </FormControl>
                <FormControl my={2}>
                    <Select placeholder='Select College' value={student.college_id} name="college_id" onChange={changeFormHandler}>
                        {colleges.map((college) =>
                            (<option key={crypto.randomUUID()} value={college.id}>
                                {college.name}
                            </option>)
                        )}
                    </Select>
                </FormControl>
                <FormControl my={2}>
                    <Select placeholder='Select Visible' name="visible" onChange={changeFormHandler}>
                        <option value="1">On</option>
                        <option value="0">Off</option>
                    </Select>
                </FormControl>
                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    isDisabled={disabled}
                >
                    Store Student
                </Button>
            </form>
        </>
    )
}

export default CreateStudent