import { Flex, Spacer, Box,Container } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Header(){
    return (
        <Container className='header-section' maxW="4xl">
          <Flex>
            <Box>
                <Link to="/">Home</Link>
            </Box>
            <Spacer />
            <Box>
                <Link to="/teachers">Teachers</Link>
            </Box>
          </Flex>
       </Container>

    )
}
export default Header