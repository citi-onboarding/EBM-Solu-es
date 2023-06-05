import {Container, ImageComponent} from './styles';

type ImageCarosselProp = {
    path: string;
    selected: boolean;
    width: number;
    height: number;
}

export const ImageCarrosel: React.FC<ImageCarosselProp> = ({path, selected, width, height}) =>{
    return(
        <Container selected = {selected}>
            <ImageComponent src={path} width={width} height={height} />
        </Container>   
    )

}