import {Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider} from "@chakra-ui/react";

function SingleGroup(props){
    const {number, students, profession} = props
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>Group Number :{number}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Profession : {profession.name}
                        </Heading>
                    </Box>
                    <Box>
                        {
                            students.map((student) => (<Heading size='xs' textTransform='uppercase' key={crypto.randomUUID()}>
                                {`${student.first_name}  ${student.last_name}`}
                            </Heading>))
                        }
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}
export default SingleGroup