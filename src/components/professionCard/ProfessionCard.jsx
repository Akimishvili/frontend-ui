import {Button, Card, CardBody, CardHeader, Text} from "@chakra-ui/react";

function professionCard(props){
    const {profession} = props;
    const {name} = profession
    return (
        <Card boxShadow='2xl'>
            <CardHeader>
                <Text fontSize='2xl' as='b'>{name}</Text>
            </CardHeader>
            <CardBody>
                <Button colorScheme='blue'>Details</Button>
            </CardBody>
        </Card>
    )
}
export default professionCard