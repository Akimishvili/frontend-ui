import {Box, Button, ButtonGroup, Card, CardBody, CardHeader, Heading, Stack, StackDivider} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import styles from "./AdminCollegeCard.module.css"
const {space_between} = styles

function AdminCollegeCard(props){
    const {college} = props
    const {name} =college
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>College Name :{name}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <ButtonGroup gap='4' className={[space_between].join(" ")}>
                            <Button bg={"orange.400"}>
                                <Link to="/admin/students/1/edit">
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </Link>
                            </Button>
                            <Button bg={"red.500"}>
                                <span className="material-symbols-outlined">
                                    delete
                                </span>
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}
export default AdminCollegeCard