import React from "react";
import {ServiceCard} from '../../components/service/index'
import {ImageCarrosel} from '../../components/clientsimage/index'
import {HomeScreen} from "../../components/home/index";
import { IconeGestao, IconeManutencao, IconeNormas, IconeMouse} from "../../components/icons/iconesimagens";
import {imagem} from '../../assets'
import { imagehome } from "../../assets";
import { ServiceSection } from "../../components/sectionservice";
import { DivCard, DivMain, DivSquare, Square, Title, Line, DivLine } from "./styles";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus ve."
export const Service: React.FC = () => {
    return (
        <DivMain>
        <Title> Nossos Serviços </Title> 
        <DivLine>
        <Line></Line>
        </DivLine>
        <DivCard> 
        <ServiceCard Icon = {IconeManutencao} name = {"Manutenção Industrial"} color = "FFF" description={description} selected = {true}/>
        <ServiceCard Icon = {IconeNormas} name = {"Normas Regulamentadoras"} color = "FFF" description={description} selected = {true}/>
        <ServiceCard Icon = {IconeGestao} name = {"Gestão Enxuta"} color = "FFF" description={description} selected = {true}/>
        </DivCard>
        <DivSquare>
        <Square></Square>
        </DivSquare>
        </DivMain>


    );
}