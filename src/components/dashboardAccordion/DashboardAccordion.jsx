import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box, List, ListItem, Button,
} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import styles from "./DashboardAccordion.module.css"
const {header_tab} = styles;
function DashboardAccordion(){
    return (
        <Accordion>
            <AccordionItem mb={2}>
                <Button variant='solid' w="100%">
                    <Link to={"/"} className={[header_tab].join(" ")} >
                        <span className="material-symbols-outlined">
                            language
                        </span>
                        <span className="placeholder">Home Page</span>
                    </Link>
                </Button>
            </AccordionItem>
            <AccordionItem bg={'yellow.100'} borderRadius="md" mb={1}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className={header_tab} >
                            <span className="material-symbols-outlined">
                                cast_for_education
                            </span>
                            <span className="placeholder">Teachers</span>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                    <List spacing={3}>
                        <ListItem>
                            <Link to="/admin/teachers">Teachers List</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/admin/teachers/create">Create Teacher</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg={'pink.100'} borderRadius="md" mb={1}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className={header_tab}>
                            <span className="material-symbols-outlined">
                                school
                            </span>
                            <span className="placeholder">Students</span>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <List spacing={3}>
                        <ListItem>
                            <Link to="/admin/students">Students List</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/admin/students/create">Create Student</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg={'blue.500'} borderRadius="md" mb={1}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className={header_tab} >
                            <span className="material-symbols-outlined">
                                cast_for_education
                            </span>
                            <span className="placeholder">Colleges</span>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                    <List spacing={3}>
                        <ListItem>
                            <Link to="/admin/colleges">Colleges List</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/admin/colleges/create">Create College</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg={'purple.300'} borderRadius="md" mb={1}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className={header_tab}>
                           <span className="material-symbols-outlined">
                                groups
                           </span>
                            <span className="placeholder">Groups</span>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <List spacing={3}>
                        <ListItem>
                            <Link to="/admin/groups">Groups List</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/admin/groups/create">Create Group</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            {/*profession*/}
            <AccordionItem bg={'teal.400'} borderRadius="md" mb={1}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className={header_tab}>
                           <span className="material-symbols-outlined">
                                engineering
                           </span>
                            <span className="placeholder">Professions</span>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <List spacing={3}>
                        <ListItem>
                            <Link to="/admin/professions">Professions List</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/admin/professions/create">Create Profession</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            {/*profession*/}
            <AccordionItem bg={'red.400'} borderRadius="md" mb={1}>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left' className={header_tab}>
                           <span className="material-symbols-outlined">
                                tenancy
                           </span>
                            <span className="placeholder">Teacher~Group</span>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <List spacing={3}>
                        <ListItem>
                            <Link to="/admin/teacher-group/create">Create Relation</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
export default DashboardAccordion