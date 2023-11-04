import { Container, Heading  } from '@chakra-ui/react'
import TeachersSection from "../sections/TeachersSection.jsx";
import StudentsPage from "./StudentsPage.jsx";
import StudentsSection from "../sections/StudentSection.jsx";
function HomePage(){
    return (
        <main className='main-section'>
            <Container maxW="4xl" p={4}>
                <Heading as='h2' size='lg' noOfLines={1}>
                <span className="material-symbols-outlined"> home</span> Home Page Content
                </Heading>
            </Container>

            <TeachersSection title={"Teachers Section"}/>
            <StudentsSection title={"Students Section"}/>
        </main>
    )
}
export default HomePage