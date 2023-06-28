import React from "react";
//import { HomeContainer } from './styles';
import { LogoCITi, Alcoa, Arconic, Bracell, Hth, Ultipan } from '../../assets';
import { NRs } from '../../components/NRs/index';
//import { NRTitle, NRsContainer } from "../../components/NRs/style";
import { Cliente } from "../../components";
import { Div1, Div2, Line2, Main, Nossos, } from "./styles";

export const NossosClientes: React.FC = () => {
    return (
        <Main>
            <Nossos>
                <h1>Nossos Clientes</h1>
                <Line2></Line2>
            </Nossos>

            <Div1>
                <Cliente
                    src={Hth}
                    width="115.59px"
                    height="108.02px"
                />

                <Cliente
                    src={Ultipan}
                    width="165.03px"
                    height="75.39pxpx"
                />

                <Cliente
                    src={Alcoa}
                    width="168px"
                    height="139px"
                />
            </Div1>

            <Div2>
                <Cliente
                    src={Bracell}
                    width="242px"
                    height="55px"
                />

                <Cliente
                    src={Arconic}
                    width="298.88px"
                    height="72.19px"
                />
            </Div2>

        </Main>
    );
}