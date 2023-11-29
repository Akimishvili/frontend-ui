import {Container, Flex, Box, Spacer, Grid, GridItem, Image} from '@chakra-ui/react'
import logo_icon from '../assets/college_logo.png'
import groups_icon from '../assets/diversity.png'
import copy_right_icon from '../assets/copyright.png'

function Footer(){
    return (
        <Container maxW="4xl"  className='footer-section' p={4}>
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={4}
            >
                <GridItem bg="orange.50" p={4} borderRadius="md">
                    <Grid templateColumns={{ base: "1fr 3fr"}} gap={2}>
                        <GridItem>
                            <Image boxSize='50px' src={copy_right_icon}/>
                        </GridItem>
                        <GridItem>
                            All Rights Reserved
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem bg="red.50" p={4} borderRadius="md">
                    <Grid templateColumns={{ base: "1fr 3fr"}} gap={2}>
                        <GridItem>
                            <Image boxSize='50px' src={logo_icon}/>
                        </GridItem>
                        <GridItem>
                            გლდანის პროფესიული მომზადების ცენტრი
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem bg="cyan.50" p={4} borderRadius="md">
                    <Grid templateColumns={{ base: "1fr 3fr"}} gap={2}>
                        <GridItem>
                            <Image boxSize='50px' src={groups_icon }/>
                        </GridItem>
                        <GridItem>
                            Created by 253 Group
                        </GridItem>
                    </Grid>
                </GridItem>
                {/* Add more GridItem components as needed */}
            </Grid>
        </Container>
      
    )
}
export default Footer