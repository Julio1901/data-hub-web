import { styled } from "styled-components";
import backgroundImage from '../../../assets/home-building.jpg'

export const ContainerPrincipal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgba(62, 153, 213, 0.1); */
    }
`

export const ContainerPrincipalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 80%;
    padding: 20px;
    background-color: rgba(62, 153, 213, 0.2);
    border-radius: 10px;
`

