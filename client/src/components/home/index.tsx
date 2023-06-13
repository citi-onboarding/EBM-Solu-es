import {Container, ImageContainer, Line, Square, DivSquare, TextContainer, ImageComponent, Title, Text, MouseTextEN, MouseTextPT, MouseContainer, TextContainerMouse, SquareDiv} from './styles';

type HomeProps = {
    Icon: React.FC;
    path: string;
    title: string;
    text: string;
    text2: string;

}

export const HomeScreen = ({Icon, path, title, text, text2} : HomeProps) =>{
    return(
        <Container> 
            <DivSquare>
            <SquareDiv>
            <Square></Square>
            </SquareDiv>
            <TextContainer>
                <Line></Line>
                <Title>{title}</Title>
                <div>
                    <Text>{text}</Text> 
                    <Text>{text2}</Text>
                </div>
                <MouseContainer>
                    <div style={{marginTop:20, marginRight: 20}}>
                    <Icon/>
                    </div>
                    <TextContainerMouse>
                        <MouseTextPT>{"Role para baixo"}</MouseTextPT> 
                        <MouseTextEN>{"Scroll Down"}</MouseTextEN> 
                    </TextContainerMouse>
            </MouseContainer>  
            </TextContainer>
            </DivSquare>
            <ImageContainer>
            <ImageComponent src={path} width={634} height={440} />
            </ImageContainer>
        </Container>  
    )

}