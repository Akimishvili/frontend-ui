import StudentsSection from "../../partials/StudentSection.jsx";
function StudentsPage(){
    return (
        <main className="main-section">
            <StudentsSection title={"Students"} is_dashboard={true} columns={2}/>
        </main>
    )
}
export default StudentsPage