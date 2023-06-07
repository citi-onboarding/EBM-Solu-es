import React from "react";
import {ServiceCard} from '../../components/service/index'
import {ImageCarrosel} from '../../components/clientsimage/index'
import {HomeScreen} from "../../components/home/index";
import { IconeGestao, IconeManutencao, IconeNormas, IconeMouse} from "../../components/icons/iconesimagens";
import {imagem} from '../../assets'
import { imagehome } from "../../assets";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus ve."
export const Home: React.FC = () => {
    return (
        <>
        <HomeScreen Icon={IconeMouse} path={imagehome} title="Vamos alavancar seus resultados!" text={description} text2={description}/> 
        </>
    );
}