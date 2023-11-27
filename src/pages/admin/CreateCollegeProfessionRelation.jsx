import {
    FormControl
    , Input, Button, Select, Alert, AlertIcon,
} from '@chakra-ui/react'
import {useState, useRef, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";

function CreateCollegeProfessionRelation(){
    const [info, setInfo] = useState(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [relation, setRelation] = useState({
        student_id: "",
        group_id: ""
    })
    const [colleges, setColleges] = useState([])
    const [professions, setProfessions] = useState([])
    useEffect(() => {
        (async() =>{
            const collegesUrl = [BACKEND_API_URL, 'colleges'].join("/")
            const collegesResponse = await fetch(collegesUrl)
            if (collegesResponse.ok){
                const collegesResource  = await collegesResponse.json()
                setColleges(collegesResource.data)
            }
            const professionsUrl = [BACKEND_API_URL, 'professions'].join("/")
            const professionsResponse = await fetch(professionsUrl)
            if(professionsResponse.ok){
                const professionsResource = await professionsResponse.json()
                setProfessions(professionsResource.data)
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
        const response = await fetch([BACKEND_API_URL, 'college-profession'].join('/'), {
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
                    <Select placeholder='Select College' value={relation.college_id} name="college_id" onChange={changeFormHandler}>
                        {colleges.map((college) =>
                            (<option value={college.id} key={crypto.randomUUID()}>
                                {college.name}
                            </option>)
                        )}
                    </Select>
                </FormControl>
                <FormControl my={2}>
                    <Select placeholder='Select Profesion' value={relation.profession_id} name="profession_id" onChange={changeFormHandler}>
                        {professions.map((profession) => (
                            <option value={profession.id} key={crypto.randomUUID()}>{profession.name}</option>
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

export default CreateCollegeProfessionRelation