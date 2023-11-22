import TeachersSection from "../../partials/TeachersSection.jsx";
function TeachersPage(){
    return (
        <main className="main-section">
            <TeachersSection title={"Teachers"}  is_dashboard={true} columns={2}/>
        </main>
    )
}
export default TeachersPage