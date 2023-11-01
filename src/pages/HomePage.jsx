import { Container, Heading  } from '@chakra-ui/react'
function HomePage(){
    return (
        <Container  bg='blue.500' className='main-section' maxW="4xl">
            <Heading as='h2' size='4xl' noOfLines={1}>
            <span class="material-symbols-outlined"> home</span> Home Page Content   
            </Heading>
        </Container>
    )
}
export default HomePage