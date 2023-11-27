import {Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function SingleCollege(props){
    const {college} = props
    const {id, name} = college
    return (
        <Card bg={'teal.200'}>
            <CardHeader>
                <Heading size='sm'>{name}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Button colorScheme='black' variant='outline'>
                        <Link to={`/colleges/${id}`}>Show College</Link>
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    )
}
export default SingleCollege