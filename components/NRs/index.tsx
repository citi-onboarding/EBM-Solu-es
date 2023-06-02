import React from "react";
import { NRsContainer, NRTitle, Caption } from './style';

type NRsProps = {
	title: string;
    color: string;
	description: string;
	selected: boolean;
}

export const NRs = ({title, color, description, selected} : NRsProps) => {
    return(
       <NRsContainer color = {color} selected = {selected}>
            <NRTitle> {title} </NRTitle>
            <Caption> {description} </Caption>
       </NRsContainer>
    )
}
