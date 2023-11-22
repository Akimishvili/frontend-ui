import {Button, Card, CardBody, CardHeader, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function GroupCard(props){
    const {group} = props;
    const {id, number} = group
    return (
        <Card boxShadow='2xl'>
            <CardHeader>
                <Text fontSize='3xl' as='b'>{number}</Text>
            </CardHeader>
            <CardBody>
                <Button colorScheme='blue'>
                    <Link to={`/groups/${id}`}>
                        Details
                    </Link>
                </Button>
            </CardBody>
        </Card>
    )
}
export default GroupCard