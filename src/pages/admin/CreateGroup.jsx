import {Button, FormControl, Input, Select} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import {BACKEND_API_URL, BACKEND_LOCAL_URL} from "../../config.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateGroup(){
    const [disabled, setDisabled] = useState(false)
    const [info, setInfo] = useState(null)
    const createForm = useRef()
    const navigate = useNavigate()
    const [professions, setProfessions] = useState([])
    const [colleges, setColleges] = useState([])
    const [group, setGroup] = useState({
        college_id: "",
        profession_id: "",
        number: "",
    })

    useEffect(() => {
        (async() => {
            const professionsUrl = [BACKEND_API_URL, "professions"].join("/")
            const professionsResponse = await  axios.get(professionsUrl)
            const {data: professions} = professionsResponse.data
            setProfessions(professions)
            const collegesUrl = [BACKEND_API_URL, "colleges"].join("/")
            const collegesResponse = await  axios.get(collegesUrl)
            const {data: colleges} =  collegesResponse.data
            setColleges(colleges)
        })()
    }, []);

    function changeFormHandler(e){
        setGroup({
            ...group,
            [e.target.name]: e.target.value
        })
    }
    async  function storeGroup(e){
        e.preventDefault()
        setDisabled(true)
        const response = await fetch([BACKEND_API_URL, 'groups'].join("/"), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( group )
        })
        if(response.ok) {
            const resource = await response.json();
            setInfo({
                status: "success",
                message: "group successfully added"
            })
            createForm.current.reset()
            setTimeout(() => {
                navigate("/admin/groups")
            }, 1500)

    }}
    return(
        <form onSubmit={storeGroup} ref={createForm}>
            <FormControl my={2}>
                <Select placeholder='Select College' value={group.college_id} name="college_id" onChange={changeFormHandler}>
                    {
                        colleges.map((college) =>
                            (<option key={crypto.randomUUID()} value={college.id}>
                                {college.name}
                            </option>))
                    }
                </Select>
            </FormControl>
            <FormControl my={2}>
                <Select placeholder='Select Profession' value={group.profession_id} name="profession_id" onChange={changeFormHandler}>
                    {
                        professions.map((profession) =>
                            (<option key={crypto.randomUUID()} value={profession.id}>
                                {profession.name}
                            </option>))
                    }
                </Select>
            </FormControl>
            <FormControl my={2}>
                <Input type='text' placeholder="Group Number" name="number" onChange={changeFormHandler}/>
            </FormControl>
            <Button
                mt={4}
                colorScheme='teal'
                type='submit'
                isDisabled={disabled}
            >
                Store Group
            </Button>
        </form>
    )
}
export default CreateGroup