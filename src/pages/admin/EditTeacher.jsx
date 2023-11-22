import {
    FormControl
    , Input, Button, Select, Alert, AlertIcon,
} from '@chakra-ui/react'
import {useState, useRef, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";

function EditTeacher(){
    const [info, setInfo] = useState(null)
    const {id} = useParams()
    const [teacher, setTeacher] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        avatar: "",
        visible: "1"
    })
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        (async() => {
            const url = [BACKEND_API_URL, 'teachers', id].join("/")
            const response = await fetch(url)
            if(response.ok){
                const resource = await response.json()
                const {first_name, last_name, email, phone, avatar, visible} = resource.data
                 console.log(resource.data, 'response')
                setTeacher({
                    first_name,
                    last_name,
                    email,
                    phone,
                    avatar,
                    visible
                })
            }
        })()
    }, [id])
    function changeFormHandler(e){
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value
        })
    }
    async function updateTeacher(e){
        e.preventDefault()
        setDisabled(true)
        const response = await fetch([BACKEND_LOCAL_URL, 'teachers', id].join("/"), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( teacher )
        })
        console.log(teacher)
        if(response.ok) {
            const resource = await response.json();
            console.log(resource, 'send')
            setInfo({
                status: "success",
                message: "teacher successfully updated"
            })
            setDisabled(false)
        }
    }
    return (
        <>
            {info ? <Alert status={info.status}>
                <AlertIcon />
                {info.message}
            </Alert> : null}

            <form onSubmit={updateTeacher}>
                <FormControl my={2}>
                    <Input type='text' placeholder="First Name" value={teacher.first_name} name="first_name" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='text' placeholder="Last Name"  value={teacher.last_name} name="last_name" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='email' placeholder="Email" value={teacher.email} name="email" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='text' placeholder="Phone" value={teacher.phone} name="phone" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Input type='url' placeholder="Avatar" value={teacher.avatar} name="avatar" onChange={changeFormHandler}/>
                </FormControl>
                <FormControl my={2}>
                    <Select placeholder='select visible' value={teacher.visible} name="visible" onChange={changeFormHandler}>
                        <option value="1">on</option>
                        <option value="0">off</option>
                    </Select>
                </FormControl>
                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    isDisabled={disabled}
                >
                    Update Teacher
                </Button>
            </form>
        </>
    )
}

export default EditTeacher