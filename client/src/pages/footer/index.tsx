import React from "react";
import { IconCITi } from "../../components/icons/iconesimagens";
import { IconLogo } from "../../components/icons/iconesimagens";
import { IconHeart } from "../../components/icons/iconesimagens";
import { Footer } from "../../components/footer/index";

export const FooterScreen: React.FC = () => {
    return (
        <>
            <Footer textcontact={"CONTATO"} email={"ebmsoluções.diretoria@gmail.com"} textbottom="Made with </> and" by={"by"} Icon={IconLogo} IconHeart={IconHeart} IconCITi={IconCITi} />
        </>
    )
}