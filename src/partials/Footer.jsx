import { Container, Flex, Box, Spacer } from '@chakra-ui/react'
function Footer(){
    return (
        <Container maxW="4xl"  className='footer-section'>
            <Flex>
                <Box md={6}>
                    Copy Write
                </Box>
                <Spacer/>
                <Box md={6}>
                    College Structure
                </Box>
            </Flex>
        </Container>
      
    )
}
export default Footer