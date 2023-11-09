import {
    FormControl
, Input, Button, Select, Alert, AlertIcon,
} from '@chakra-ui/react'
import {useState} from "react";
import axios from "axios"
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";

function CreateTeacher(){
    const [info, setInfo] = useState(null)
    const [teacher, setTeacher] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        avatar: "",
        visible: "1"
    })
    const [disabled, setDisabled] = useState(false)
    function changeFormHandler(e){
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value
        })
    }
    async function storeTeacher(e){
        e.preventDefault()
        setDisabled(true)
        const response = await fetch(`${BACKEND_LOCAL_URL}/teachers`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( teacher )
        })
        if(response.ok) {
            const resource = await response.json();
            setInfo({
                status: "success",
                message: "teacher successfully added"
            })
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


            <form onSubmit={storeTeacher}>
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
                <Input type='url' placeholder="Avatar" name="avatar" onChange={changeFormHandler}/>
            </FormControl>
            <FormControl my={2}>
                <Select placeholder='select visible' name="visible" onChange={changeFormHandler}>
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
                Store Teacher
            </Button>
        </form>
        </>
    )
}

export default CreateTeacher