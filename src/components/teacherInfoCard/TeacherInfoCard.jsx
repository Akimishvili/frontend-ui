
import {Card, Image, Text, Flex, CardHeader, CardBody} from '@chakra-ui/react';

function TeacherInfoCard(props){
    const {teacher} = props;
    const { first_name, last_name, email, phone, avatar, visible } = teacher;
    return (
        <Card borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
           <CardHeader>
                 <Image src={avatar}  mb="2" />
           </CardHeader>
            <CardBody>
                <Text fontSize="xl" fontWeight="bold">
                    {`${first_name} ${last_name}`}
                </Text>
                <Text fontSize="md" color="gray.500">
                    Email: {email}
                </Text>
                <Text fontSize="md" color="gray.500">
                    Phone: {phone}
                </Text>
                <Flex align="center">
                    <Text fontSize="md" color="gray.500">
                        Visible: {visible ? 'Yes' : 'No'}
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default TeacherInfoCard
