import { useRef, useEffect } from "react"
import { Link } from 'react-router-dom';
import { Heading, Box, HStack } from "@chakra-ui/react"

function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        let prevScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScroll > currentScroll) {
                headerElement.style.top = "0";
            } else {
                // offsetHeight é o tamanho da height + padding + border
                // fazendo com que o header desapareça exatamente na mesma altura que tem
                headerElement.style.top = `-${headerElement.offsetHeight}px`;
            }
            prevScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            ref={headerRef}
            position="fixed"
            top={0}
            left={0}
            right={0}
            bg={'lightblue'}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingY="25px" // Adiciona o mesmo padding vertical
            paddingX="20px" // Adiciona o padding horizontal
            transition="top 0.3s ease-in-out" // Adiciona a transição para a propriedade top
            zIndex={2} // zIndex para garantir que o cabeçalho fique acima de outros elementos na página Quanto maior o zIndex, mais alto na hierarquia
        >
            <HStack>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Heading>Boca de Sapo - Receitas</Heading>
                </Link>
            </HStack>
            <HStack>
                <Heading padding="0 20px">Login / Registar</Heading>
            </HStack>
        </Box>
    )
}

export default Header;
