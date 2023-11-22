import {Card, CardBody, Flex, Kbd} from '@chakra-ui/react'
function DeskCard(props){
    const {bgColor, children} = props
    return(
        <Card bg={bgColor}>
            <CardBody>
                <Flex gap={2}>
                    {children}
                </Flex>
            </CardBody>
        </Card>
    )
}
export default DeskCard