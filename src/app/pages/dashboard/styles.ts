import { styled } from "styled-components";
import backgroundImage from '../../../assets/home-building.jpg'

export const ContainerPrincipal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const ContainerPrincipalContent = styled.div`
  width: 50%;
  height: 80%;
  padding: 20px;
  background-color: rgba(62, 153, 213, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;