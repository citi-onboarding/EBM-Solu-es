import React, { useState } from "react";
import { Container, BlackBackground, Gradient, DivMiddle, Line, DivText, Contact, Email, BottomPart, BottomText, NotGradient, Formulario, Label, Input, TextArea, Button, Form, TitleForm, LineForm, InputDiv } from "./styles";

type FooterProps = {
    textcontact: string;
    email: string;
    textbottom: string;
    by: string;
    Icon: React.FC;
    IconHeart: React.FC;
    IconCITi: React.FC;
}

interface FormData {
    name: string;
    email: string;
    reason: string;
}

export const Footer = ({ textcontact, email, textbottom, by, Icon, IconHeart, IconCITi }: FooterProps) => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        reason: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode realizar alguma ação com os dados do formulário, como enviar para um servidor, por exemplo
        console.log(formData);
        // Resetar os campos do formulário
        setFormData({
            name: "",
            email: "",
            reason: "",
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value, }));
    };

    return (
        <Container>
                <Formulario>
                    <TitleForm>Ficou interessado? <br/>
                        Entre em contato conosco!
                    </TitleForm>
                    <LineForm></LineForm>
                    <Form onSubmit={handleSubmit}>
                        <InputDiv>
                            <Label htmlFor="nome">Nome:</Label>
                            <Input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </InputDiv>
                        <InputDiv>
                            <Label htmlFor="email">E-mail:</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputDiv>
                        <InputDiv>
                            <Label htmlFor="motivo">Motivo do Contato:</Label>
                            <TextArea
                                id="motivo"
                                name="motivo"
                                value={formData.reason}
                                onChange={handleChange}
                                required
                            />
                        </InputDiv>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Formulario>
            <Gradient>
                <BlackBackground>
                    <DivMiddle>
                        <Icon />
                        <DivText>
                            <Contact>{textcontact}</Contact>
                            <Email>{email}</Email>
                        </DivText>
                    </DivMiddle>
                    <BottomPart>
                        <BottomText>{textbottom}</BottomText>
                        <IconHeart />
                        <BottomText>{by}</BottomText>
                        <IconCITi />
                    </BottomPart>
                </BlackBackground>
            </Gradient>

        </Container>

    )
}