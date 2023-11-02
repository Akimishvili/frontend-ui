import { Container, Heading  } from '@chakra-ui/react'
function HomePage(){
    return (
        <main className='main-section'>
            <Container maxW="4xl">
                <Heading as='h2' size='4xl' noOfLines={1}>
                <span className="material-symbols-outlined"> home</span> Home Page Content
                </Heading>
            </Container>
        </main>
    )
}
export default HomePage