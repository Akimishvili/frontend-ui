import GroupsSection from "../partials/GroupsSection.jsx";

function GroupsPage(){
    return(
        <main className="main-section">
           <GroupsSection  title={"Groups"} is_dashboard={false} columns={3}/>
        </main>
    )

}

export default GroupsPage