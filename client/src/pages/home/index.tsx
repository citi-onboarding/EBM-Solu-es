import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';
import {ServiceCard} from '../../components/service/index'
import { IconeGestao, IconeManutencao, IconeNormas } from "../../components/icons/iconesimagens";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus ve."
export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <ServiceCard name="Manutenção Industrial" description={description} color="FFF" selected={true} Icon={IconeManutencao}/>
        </HomeContainer>
    );
}