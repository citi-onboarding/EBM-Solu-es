import { Carousel } from "../../components";
import { Case, Container, Text, Title } from "./styles";

export const Carrossel: React.FC = () => {
    return (
        <Container>
            <Case>
                <Title>
                    Cases
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel. Integer quam mattis aliquam urna, in amet.
                </Text>
            </Case>

            <Carousel />
        </Container>
    );
}