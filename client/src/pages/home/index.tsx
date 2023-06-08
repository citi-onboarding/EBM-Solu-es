import React from "react";
import {ServiceCard} from '../../components/service/index'
import {HomeScreen} from "../../components/home/index";
import { IconeMouse} from "../../components/icons/iconesimagens";
import { imagehome } from "../../assets";
import { ServiceSection } from "../../components/sectionservice";
import { text } from "stream/consumers";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus fermentum adipiscing elementum in placerat orci tellus ve."
export const Home: React.FC = () => {
    return (
      <>
        <HomeScreen Icon= {IconeMouse} path = {imagehome} title = {"Vamos alavancar seus resultados"} text = {description} text2 = {description}/>
      </>
    );
}