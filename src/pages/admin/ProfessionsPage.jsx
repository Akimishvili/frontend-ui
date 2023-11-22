import ProfessionsSection from "../../partials/ProfessionsSection.jsx";

function ProfessionsPage(){
    return(
        <main className="main-section">
            <ProfessionsSection title={"Professions"} is_dashboard={true} columns={2}/>
        </main>
    )
}

export default ProfessionsPage