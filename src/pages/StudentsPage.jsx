import StudentSection from "../partials/StudentSection.jsx";
import TeachersSection from "../partials/TeachersSection.jsx";
import StudentsSection from "../partials/StudentSection.jsx";

function StudentsPage(){
    return(
        <main className="main-section">
            <StudentsSection title={null}  is_dashboard={false} columns={3}/>
        </main>
    )

}

export default StudentsPage