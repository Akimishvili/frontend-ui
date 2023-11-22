import ProfessionsSection from "../partials/ProfessionsSection.jsx";

function ProfessionsPage(){
    return(
        <main className="main-section">
            <ProfessionsSection title={"Professions"} is_dashboard={false} columns={3}/>
        </main>
    )

}

export default ProfessionsPage