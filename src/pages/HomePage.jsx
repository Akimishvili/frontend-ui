import { Container, Heading  } from '@chakra-ui/react'
import TeachersSection from "../partials/TeachersSection.jsx";
import StudentsPage from "./StudentsPage.jsx";
import StudentsSection from "../partials/StudentSection.jsx";
function HomePage(){
    return (
        <main className='main-section'>
            <Container maxW="4xl" p={4}>
                <Heading as='h2' size='lg' noOfLines={1}>
                <span className="material-symbols-outlined"> home</span> Home Page Content
                </Heading>
            </Container>

            <TeachersSection title={"Teachers Section"} is_dashboard={false} columns={3}/>
            <StudentsSection title={"Students Section"}/>
        </main>
    )
}
export default HomePage