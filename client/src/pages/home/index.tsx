import React from "react";
//import { HomeContainer } from './styles';
import { LogoCITi, Alcoa, Arconic, Bracell, Hth, Ultipan } from '../../assets';
import { NRs } from '../../components/NRs/index';
//import { NRTitle, NRsContainer } from "../../components/NRs/style";
import { Cliente } from "../../components";
import { NR12, NR35, Slogan, Sobre } from "./styles";
import { Line } from "../../components/NRs/style";

export const Home: React.FC = () => {
    return (
        <>

            <Slogan>
               <h1>
               <span className="color1">Conheça a </span>
               <br/>
               <span className="color2">EBM Soluções</span>
               </h1> 
               <Line></Line>         
            </Slogan>

            <Sobre>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel. Integer quam mattis aliquam urna, in amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel. Integer quam mattis aliquam urna, in amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus vel.
            </Sobre>
            
            <NR12>
                <NRs
                 title = "NR 12"
                 color = ""
                 description = "PROT. DE MÁQUINAS"
                 selected = {true}
                 />
            </NR12>

            <NR35>
                <NRs
                 title = "NR 35"
                 color = ""
                 description = "LINHAS DE VIDA"
                 selected = {true}
                 />
            </NR35>

            

             {/* <Cliente
             src = {Alcoa}
             width= "168px"
             height= "139px"
             />

            <Cliente
             src = {Arconic}
             width = "298.88px"
             height = "72.19px"
             />

             <Cliente
             src = {Ultipan}
             width = "165.03px"
             height = "75.39px"
             /> */}
        </>
    );
}