import '../styles/Form.css';
import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { reduceString } from '../utils';
import { colorScheme } from '../constants';
import {
    Box,
    Card,
    CardBody,
    HStack,
    VStack,
    Text,
    Divider,
    SimpleGrid,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Badge,
    Image,
    Heading
} from '@chakra-ui/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../components/Loading';

function Index() {
    const [receita, setReceita] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Verifica se há dados no localStorage
                const storedData = JSON.parse(localStorage.getItem('indexData'));
                if (storedData) {
                    setReceita(storedData.receita);
                    setUsers(storedData.users);
                    setLoading(false);
                } else {
                    const response = await fetch(`http://127.0.0.1:8000/recipe/`);
                    const data = await response.json();
                    setReceita(data);
                    // Agora que receita está disponível, podemos buscar os usuários
                    await fetchUsers(data);
                }
            } catch (error) {
                console.log("Erro: ", error);
            }
        };

        const fetchUsers = async (recipes) => {
            try {
                const fetchPromises = recipes.map(async (recipe) => {
                    const response = await fetch(`http://127.0.0.1:8000/user_detail/${recipe.creator}`);
                    const data = await response.json();
                    return data;
                });
                const userData = await Promise.all(fetchPromises);
                const updatedUsers = users === null ? [] : users;
                userData.forEach(user => {
                    if (!updatedUsers.some(existingUser => existingUser.user_Id === user.user_Id)) {
                        updatedUsers.push(user);
                    }
                });
                setUsers(updatedUsers);
                setLoading(false); // Agora ambos os dados estão disponíveis
                // Armazena os dados no localStorage
                localStorage.setItem('indexData', JSON.stringify({ receita, users: updatedUsers }));
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();

    }, []);

    const DisplayReceita = ({ receitas }) => {
        return (
            <SimpleGrid columns={[1, null, 3]}>
                {
                    receitas.map((receita) => (
                        <Box m="10px" key={receita.recipe_Id} >
                            <Card maxW='xl' maxH="xxl">
                                <CardBody>
                                    <VStack align='start'>
                                        <HStack>
                                            <Link to={`/perfil/${receita.creator}`}>
                                                <Heading>{users.map((user) => {
                                                    if (user.user_Id === receita.creator) {
                                                        return <p key={user.user_Id}>{user.username} {user.last_Name}</p>
                                                    }
                                                    return null;
                                                })}
                                                </Heading>
                                            </Link>
                                        </HStack>
                                        <HStack>
                                            <Text as="b">{receita.recipe_Name}</Text>
                                            <Text>Data criação: {receita.creation_Date}</Text>
                                        </HStack>
                                        <HStack>
                                            <p>Dificuldade: <Badge colorScheme={colorScheme[receita.difficulty_Level]}>{receita.difficulty_Level}</Badge></p>
                                            <p>Tempo de preparo: {receita.preparation_Time}</p>
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
                                                    {reduceString(receita.description)}
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
                                                    {reduceString(receita.ingredients)}
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                        <Divider />
                                        <Link to={`/receita/${receita.recipe_Id}`}>Ver Receita <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </Box>
                    ))
                }
            </SimpleGrid>
        )
    };

    return (
        <div className="index">
            {loading ? <Loading /> : (receita !== null && users !== null ? <DisplayReceita receitas={receita} /> : <Loading />)}
        </div>
    )
}

export default Index;
