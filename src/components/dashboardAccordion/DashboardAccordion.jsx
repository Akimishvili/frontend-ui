import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box, List, ListItem,
} from '@chakra-ui/react'
import {Link} from "react-router-dom";

function DashboardAccordion(){
    return (
        <Accordion>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            Teachers
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
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
        </Accordion>
    )
}
export default DashboardAccordion