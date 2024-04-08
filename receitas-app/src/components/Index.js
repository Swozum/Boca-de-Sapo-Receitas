import '../App.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
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
    Image
} from '@chakra-ui/react'
import Loading from './Loading';

function Index() {

    const [receita, setReceita] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposnse = await fetch(`http://127.0.0.1:8000/recipe/`);
                const data = await resposnse.json();
                setReceita(data);
            } catch (error) {
                console.log("Erro: ", error)
            };
        };

        fetchData();
    }, []);

    const colorScheme = {
        1: "green",
        2: "green",
        3: "grey",
        4: "red",
        5: "red"
    }

    const reduceString = (string) => {
        const maxCharacters = 100;
        if(string.length > 100) {
            return string.slice(0, maxCharacters) + '...'
        }
        return string;
    }

    //useEffect(() => console.log("Receita: ", receita))

    const DisplayReceita = ({ receitas }) => {
        return (
            <SimpleGrid columns={[1, null, 3]}>
                {
                    receitas.map((receita) => (
                        <Box m="10px"  key={receita.recipe_Id} >
                            <Card maxW='xl' maxH="xxl">
                                <CardBody>
                                    <VStack align='start'>
                                        <HStack>
                                            <Text as="b">{receita.recipe_Name}</Text>
                                            <Text>Data criação: {receita.creation_Date}</Text>
                                        </HStack>
                                        <HStack>
                                            <p>Dificuldade: <Badge colorScheme={colorScheme[receita.difficulty_Level]}>{receita.difficulty_Level}</Badge></p>
                                            <p>Tempo de preparo: {receita.preparation_Time}</p>
                                        </HStack>
                                        <HStack>
                                            
                                            <Image key={receita.photos.id} src="https://www.receitaslidl.pt/var/site/storage/images/4/3/4/2/602434-1-por-PT/Caldo-verde.jpg" />
                                        </HStack>
                                        <Accordion allowToggle allowMultiple>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton  as="span" flex='1' textAlign={'left'} _expanded={{bg: "grey", color: 'white'}}>
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
                                                    <AccordionButton as="span" flex='1' textAlign={'left'} _expanded={{bg: "grey", color: 'white'}}>
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
                                        <Link to={`/verReceita/${receita.recipe_Id}`}>Ver Receita</Link>
                                        <Link to={`/receita/${receita.recipe_Id}`}>Ver Receita</Link>
                                        <hr />
                                    </VStack>
                                </CardBody>
                            </Card>
                        </Box>
                    ))
                }
            </SimpleGrid>
        )
    }

    return (
        <div className="index">
            {receita !== null ? <DisplayReceita receitas={receita} /> : <Loading />}
        </div>
    )
}

export default Index;