import {Button, FormControl, Input, Select} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {randomNumbers} from "../../helpers.js";

function CreateProfession(){
    const [disabled, setDisabled] = useState(false)
    const [info, setInfo] = useState(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [professions, setProfessions] = useState([])
    const [profession, setProfession] = useState({
        name: "",
    })

    useEffect(() => {
        (async() => {
            const url = [BACKEND_API_URL, "professions"].join("/")
            const response = await  axios.get(url)
            const {data} = response.data
            setProfessions(data)
        })()
    }, [])
    function changeFormHandler(e){
        setProfession({
            ...profession,
            [e.target.name]: e.target.value
        })
    }
    async  function storeProfession(e){
        e.preventDefault()
        setDisabled(true)
        const response = await fetch([BACKEND_API_URL, 'professions'].join("/"), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...profession, identifier: randomNumbers(11) } )
        })
        if(response.ok) {
            const resource = await response.json();
            setInfo({
                status: "success",
                message: "profession successfully added"
            })
            createForm.current.reset()
            setTimeout(() => {
                navigate("/admin/professions")
            }, 1500)
        }}
    return(
        <form onSubmit={storeProfession} ref={createForm}>
            <FormControl my={2}>
                <Input type='text' placeholder="Profession Name" name="name" onChange={changeFormHandler}/>
            </FormControl>
            <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                isDisabled={disabled}
            >
                Store Profession
            </Button>
        </form>
    )
}
export default CreateProfession