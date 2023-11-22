import {Button, FormControl, Input, Select} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateCollege(){
    const [disabled, setDisabled] = useState(false)
    const [info, setInfo] = useState(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [college, setCollege] = useState({
        name: "",
        address: "",
        visible: "1"
    })

    // useEffect(() => {
    //     (async() => {
    //         const url = [BACKEND_API_URL, "colleges"].join("/")
    //         const response = await  axios.get(url)
    //         const {data} = response.data
    //         setProfessions(data)
    //     })()
    // }, []);
    function changeFormHandler(e){
        setCollege({
            ...college,
            [e.target.name]: e.target.value
        })
    }
    async  function storeCollege(e){
        e.preventDefault()
        setDisabled(true)
        const response = await fetch([BACKEND_API_URL, 'colleges'].join("/"), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( college )
        })
        if(response.ok) {
            const resource = await response.json();
            setInfo({
                status: "success",
                message: "group successfully added"
            })
            createForm.current.reset()
            setTimeout(() => {
                navigate("/admin/colleges")
            }, 1500)

        }}
    return(
        <form onSubmit={storeCollege} ref={createForm}>
            <FormControl my={2}>
                <Input type='text' placeholder="College Name" name="name" onChange={changeFormHandler}/>
            </FormControl>
            <FormControl my={2}>
                <Input type='text' placeholder="College Address" name="address" onChange={changeFormHandler}/>
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
                Store College
            </Button>
        </form>
    )
}
export default CreateCollege