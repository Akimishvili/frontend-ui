import GroupsSection from "../../partials/GroupsSection.jsx";

function GroupsPage(){
    return(
        <main className="main-section">
            <GroupsSection  title={"Groups"} is_dashboard={true} columns={2}/>
        </main>
    )

}

export default GroupsPage