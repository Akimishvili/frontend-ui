import { Flex, Box,Container } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Header(){
    return (
        <Container className='header-section' maxW="4xl"  p={4}>
          <Flex gap={4}>
            <Box>
                <Link to="/">Home</Link>
            </Box>

            <Box>
                <Link to="/teachers">Teachers</Link>
            </Box>

            <Box>
                <Link to="/students">Students</Link>
            </Box>
          </Flex>
       </Container>

    )
}
export default Header