import {Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function SingleGroup(props){
    const {group} = props
    const {id, number} = group
    return (
        <Card bg={'blue.200'}>
            <CardHeader>
                <Heading size='sm'>Number :{number}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Button colorScheme='black' variant='outline'>
                            <Link to={`/groups/${id}`}>Show Group</Link>
                        </Button>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}
export default SingleGroup