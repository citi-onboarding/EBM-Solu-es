import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';
import { NRs } from '../../components/NRs/index';
import { NRTitle, NRsContainer } from "../../components/NRs/style";


export const Home: React.FC = () => {
    return (
            <NRs
             title = "NR 35"
             color = "red"
             description = "LINHAS DE VIDA"
             selected = {true}
             />
    );
}