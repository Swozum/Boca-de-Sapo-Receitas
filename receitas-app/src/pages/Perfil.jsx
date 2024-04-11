import '../styles/App.css'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {
    Avatar,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Badge,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Heading,
    Grid,
    GridItem,
    HStack,
    VStack,
    SimpleGrid,
    Tag,
    Text,
    Textarea,
} from "@chakra-ui/react"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../components/Loading';
import { reduceString } from '../utils';
import { colorScheme } from '../constants';

export default function Perfil() {
    const { index } = useParams()
    const [user, setUser] = useState(null);
    const [userRecipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchUser = () => {
            try {
                fetch(`http://127.0.0.1:8000/user_detail/${index}`)
                    .then(response => response.json())
                    .then(data => setUser(data))
            } catch (e) {
                console.log(e)
            }
        }
        fetchUser();
    }, [])


    const HeaderPerfil = () => {
        const { user_Id, username, last_Name, birth_Date, ...rest } = user;
        return (
            <Grid
                m="5%"
                h="auto"
                templateColumns="repeat(2, 1fr)"
            >
                <GridItem colSpan={1}>
                    <Box bg="white" p="15px" marginLeft="2%" marginTop="2%" marginBottom="2%" height="90%">
                        <HStack>
                            <Avatar size="2xl"></Avatar>
                            <VStack>
                                <Heading>{username} {last_Name}</Heading>
                                <p>{user_Id}</p>
                            </VStack>
                        </HStack>
                    </Box>
                </GridItem>

                <GridItem colSpan={1}>
                    <Box bg="white" p="15px" marginRight="2%" marginTop="2%" marginBottom="2%" height="90%">
                        <Heading fontSize="md">
                            Quem sou
                        </Heading>
                        <Textarea readOnly resize="none">

                        </Textarea>
                    </Box>
                </GridItem>
            </Grid>
        );
    };

    const DisplayUserRecipes = () => {
        if (userRecipes.length <= 0) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '25vh' }}>
                    <Heading>Sem receitas publicadas</Heading>
                </div>
            )
        } else {
            return (
                <SimpleGrid columns={[1, null, 3]}>
                            <Box m="10px">
                                <Card maxW='xl' maxH="xxl">
                                    <CardBody>
                                        <VStack align='start'>
                                            <HStack>
                                                <Text as="b"></Text>
                                                <Text>Data criação: </Text>
                                            </HStack>
                                            <HStack>
                                                <p>Dificuldade: <Badge colorScheme={colorScheme[1]}></Badge></p>
                                                <p>Tempo de preparo: </p>
                                            </HStack>
                                            <HStack>
                                                <Image src="https://www.receitaslidl.pt/var/site/storage/images/4/3/4/2/602434-1-por-PT/Caldo-verde.jpg" />
                                            </HStack>
                                            <Accordion allowMultiple>
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton as="span" flex='1' textAlign={'left'} _expanded={{ bg: "grey", color: 'white' }}>
                                                            Descrição
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel>
                                                        {reduceString("receita.description")}
                                                    </AccordionPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton as="span" flex='1' textAlign={'left'} _expanded={{ bg: "grey", color: 'white' }}>
                                                            Ingredientes
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel>
                                                        {reduceString("receita.ingredients")}
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                            <Divider />
                                            <Link to={`/receita/1`}>Ver Receita <FontAwesomeIcon icon={faArrowRight} /></Link>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </Box>
                </SimpleGrid>
            )
        }
    }

    return (
        <div className='index'>
            {user !== null ? <HeaderPerfil /> : <Loading />}
            <Box>
                {user !== null ? <DisplayUserRecipes /> : <Loading />}
            </Box>
        </div>
    )
}
