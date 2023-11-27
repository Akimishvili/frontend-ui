import {Button, Card, CardBody, CardHeader, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function CollegeCard(props){
    const {college} = props;
    const {id, name, address} = college
    return (
        <Card boxShadow='2xl'>
            <CardHeader>
                <Text fontSize='md' as='b'>College Name: {name}</Text>
            </CardHeader>
            {/*<CardHeader>*/}
            {/*    <Text fontSize='md' as='b'>College Address: {address}</Text>*/}
            {/*</CardHeader>*/}
            <CardBody>
                <Button colorScheme='blue'>
                    <Link to={`/colleges/${id}`}>
                        Details
                    </Link>
                </Button>
            </CardBody>
        </Card>
    )
}
export default CollegeCard