import {
    FormControl
    , Input, Button, Select, Alert, AlertIcon
} from '@chakra-ui/react'
import {useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";

function CreateStudent(){
    const [info, setInfo] = useState(null)
    const avatar = useRef(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [teacher, setTeacher] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        identifier: "",
        visible: "1"
    })
    const [disabled, setDisabled] = useState(false)
    function changeFormHandler(e){
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value
        })
    }
    async function storeStudent(e){
        e.preventDefault()
        setDisabled(true)
        const formData = new FormData()
        formData.append('first_name', teacher.first_name)
        formData.append('last_name', teacher.last_name)
        formData.append('email', teacher.email)
        formData.append('phone', teacher.phone)
        formData.append('identifier', teacher.identifier)
        formData.append('visible', teacher.visible)
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