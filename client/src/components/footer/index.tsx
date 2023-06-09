import { Container,BlackBackground, Gradient, DivMiddle, Line, DivText, Contact, Email, BottomPart, BottomText, NotGradient} from "./styles"; 

type FooterProps = {
    textcontact: string;
    email: string;
    textbottom: string;
    by: string;
    Icon: React.FC;
    IconHeart: React.FC;
    IconCITi: React.FC;
}

export const Footer = ({textcontact, email, textbottom, by, Icon, IconHeart, IconCITi}: FooterProps) => {
    return(
        <Container>
            <Gradient>
                <BlackBackground>
                    <DivMiddle>
                    <Icon/>
                    <DivText>
                        <Contact>{textcontact}</Contact>
                        <Email>{email}</Email>
                    </DivText>
                    </DivMiddle>
                    <BottomPart>
                        <BottomText>{textbottom}</BottomText>
                        <IconHeart/>
                        <BottomText>{by}</BottomText>
                        <IconCITi/>
                    </BottomPart>
                </BlackBackground>
            </Gradient>

        </Container>

    )
}