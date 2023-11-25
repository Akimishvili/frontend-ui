import {Flex, Box, Container, Button, Spacer} from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Header(){
    return (
        <Container className='header-section' maxW="4xl"  p={4} >
          <Flex>
              <Box>
                  <Flex gap={4}>
                      <Box>
                          <Button colorScheme='gray'>
                              <Link to="/">
                                  <span className="material-symbols-outlined"> home</span>
                              </Link>
                          </Button>
                      </Box>
                      <Box>
                          <Button bgColor={'yellow.100'}>
                              <Link to="/teachers">
                                  Teachers
                              </Link>
                          </Button>
                      </Box>
                      <Box>
                          <Button bgColor={'pink.100'}>
                              <Link to="/students">
                                  Students
                              </Link>
                          </Button>
                      </Box>
                      <Box>
                          <Button bgColor={'purple.300'}>
                              <Link to="/groups">
                                  Groups
                              </Link>
                          </Button>
                      </Box>
                      <Box>
                          <Button bgColor={'teal.400'}>
                              <Link to="/professions">
                                  Professions
                              </Link>
                          </Button>
                      </Box>
                      <Box>
                          <Button bgColor={'blue.500'}>
                              <Link to="/professions">
                                  Colleges
                              </Link>
                          </Button>
                      </Box>
                  </Flex>
              </Box>
              <Spacer />
              <Box>
                  <Button colorScheme='teal'>
                      <Link to="/admin" style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
                          <span className="material-symbols-outlined">
                             admin_panel_settings
                          </span>
                          <span className="placeholder">Admin</span>
                      </Link>
                  </Button>
              </Box>
          </Flex>
       </Container>

    )
}
export default Header