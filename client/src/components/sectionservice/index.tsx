import {ContainerMain,  Line, Title, DivTitle} from './styles';

type ServiceSectionProps = {
    text: string,
}

export const ServiceSection = ({text} : ServiceSectionProps) => {
    return (
    <ContainerMain> 
        <Title>{text}</Title>
        <Line></Line>
    </ContainerMain>
    )
}



