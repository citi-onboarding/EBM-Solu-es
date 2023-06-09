import { Component } from 'react';
import { Container, ServiceDescription, ServiceName, } from './styles';
type ServicesProps = {
    Icon: React.FC;
    name : string;
    description : string;
    color: string;
    selected: boolean;
}


export const ServiceCard = ({Icon, name, description, color, selected} : ServicesProps) =>{
    return(
        <Container color = {color} selected = {selected}>
            <Icon />
            <ServiceName>{name}</ServiceName>
            <ServiceDescription>{description}</ServiceDescription>
        </Container>   
    )

}