import React from "react";
import { LogoCITi, Alcoa, Arconic, Bracell, Hth, Ultipan, EBM } from '../../assets';
import { NRs } from '../../components/NRs/index';
import { Cliente } from "../../components";
import { Card, Ebm, Main, Preto, Texto, Texto2 } from "./styles";

export const Nav: React.FC = () => {
    return (
        <Main>
            <Ebm>
                <Cliente
                    src={EBM}
                    width="78px"
                    height="33.45px"
                />
            </Ebm>

            <Preto>
                <Texto2>Início</Texto2> 
                <Texto2>Quem Somos</Texto2> 
                <Texto2>Serviços</Texto2> 
                <Texto2>Cases</Texto2>
            </Preto>

            <Card>
                <Texto>Contato</Texto>
            </Card>


        </Main>
    );
}