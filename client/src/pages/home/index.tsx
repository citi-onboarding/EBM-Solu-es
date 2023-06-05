import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';
import {ServiceCard} from '../../components/service/index'
import {ImageCarrosel} from '../../components/clientsimage/index'
import { IconeGestao, IconeManutencao, IconeNormas } from "../../components/icons/iconesimagens";
import {imagem} from '../../assets'
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus ve."
export const Home: React.FC = () => {
    return (
        <>
            <ServiceCard name="Manutenção Industrial" description={description} color="FFF" selected={true} Icon={IconeManutencao}/>
            <ImageCarrosel width={400} height={300} path={imagem} selected={true} />   
        </>
    );
}