import CollegesSection from "../../partials/CollegesSection.jsx";

function GroupsPage(){
    return(
        <main className="main-section">
            <CollegesSection  title={"Colleges"} is_dashboard={true} columns={2}/>
        </main>
    )

}

export default GroupsPage