import React, { lazy } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Mulheres Cicloativistas</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="“É a rede em torno dessas mulheres que parece fazer com que elas comecem a pedalar e que permaneçam pedalando — e os exemplos femininos, as mulheres (conhecidas ou não) que pedalam e as inspiraram.”"
            name="Marina Harkot"
            image="avatar-1"
          />

          <Card
            text="“A ideia de que mais da metade das jovens sai de casa todos os dias temendo sofrer algum tipo de violência é alarmante. Sentir medo não é normal.”"
            name="Ana Paula Ferreira"
            image="avatar-2"
          />

          <Card
            text="“A melhor maneira de cultivar a coragem em nossas filhas e outras jovens é pelo exemplo. Se eles virem suas mães e outras mulheres em suas vidas indo em frente apesar do medo, eles saberão que é possível.”"
            name="Gloria Steinem"
            image="avatar-3"
          />

        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
