import styled from "styled-components";
import Slider from "react-slick";
export const CarouselContainer= styled.div`
    width:900px;
    @media (max-width:1280px) {
        width: 48%
    }
    margin-top:126px;
    margin-left:567px;


`
export const StyledSlider = styled(Slider)`
    .slick-list{}
`