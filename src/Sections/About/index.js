import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import cyclist from "../../assets/WomanWithBike.png";
import woman from "../../assets/Woman.png";

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Flower = styled.div`
  position: absolute;
  bottom: -20rem;
  margin-right: -180px;
  right: 0;
	animation: roda 2s linear infinite;
  
  @keyframes roda { 
    0% {
       transform: rotate(0);
    } 100% {
       transform: rotate(360deg);
      } 
    }
  @media only Screen and (max-width: 40em) {
  display: none;

`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Cyclist = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
width: 60%;
  padding-bottom: 5rem;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Woman = styled.div`
  width: 40%;
  position: absolute;
  right: 0;
  bottom: 100%;
  transform: rotate(12deg);

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
        <Main>
        <div>
          <Title>Sobre</Title>
          <CurvedLine />
        </div>
        <Content>
          <Cyclist>
            <img src={cyclist} alt="" width="400" height="400" />
          </Cyclist>
          <AboutText>
            <Woman>
              <img src={woman} alt="" width="400" height="400" />
            </Woman>

            <Text>
            O IBGE aponta que, no Brasil, 66,6% da população feminina acima dos 15 anos não pratica exercícios físicos, em grande parte por sentirem receio de praticá-los sozinhas e não possuírem companhia disponível nesses momentos.
            A fim de diminuir esses índices de sedentarismo no país, o Ártemis surge como uma comunidade de mulheres que incentiva e conecta suas usuárias para que possam se exercitar coletivamente através da prática do ciclismo.

            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
