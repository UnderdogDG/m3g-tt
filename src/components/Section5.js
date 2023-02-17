import styled from 'styled-components';

import { section5 } from '../utils/data/s5';


import aboutUs from '../imgs/img-about-us.jpg'
import { PlotCol } from './s5/PlotCol';
import { MainSection, SectionContainer } from '../containers';
import { Counter } from './counter';

export function Section5(){
    
    return(
        <Section5Container>
            <Section5Wrapper>
                <TitleContainer>
                    <TitleH2>{ section5.header }</TitleH2>
                    <TitleH3>{ section5.subheader }</TitleH3>
                </TitleContainer>
                <BodyContainer>
                    <Row1Container>
                        <ParagraphContainer>
                            <p>
                                { section5.body }
                            </p>
                            <CounterContainer>
                                <CounterCol>
                                    <Counter amount={ section5.counter.amount }  label1={ section5.counter.p1 } label2={ section5.counter.p2 } />
                                </CounterCol>
                            </CounterContainer>
                        </ParagraphContainer>
                        <ImageContainer>
                            <ImageWrapper>
                                <StyledImage src={ aboutUs }/>
                            </ImageWrapper>
                        </ImageContainer>
                    </Row1Container>
                    <Row2Container>
                        <PlotContainer>
                            <PlotTitleContainer>
                                <PlotTitle>
                                    { section5.plotTitle }
                                </PlotTitle>
                            </PlotTitleContainer>
                            <PlotWrapper>
                                <PlotCol title={ section5.plotCol1.title } data={ section5.plotCol1.bars } max={300} ></PlotCol>
                                <PlotCol title={ section5.plotCol2.title } data={ section5.plotCol2.bars } max={100} ></PlotCol>
    

                            </PlotWrapper>
                        </PlotContainer>
                        <PlecaContainer>

                        </PlecaContainer>
                    </Row2Container>
                </BodyContainer>
            </Section5Wrapper>
        </Section5Container>
    );
};

const Section5Container = styled(MainSection)`
    background-color: ${ ({theme})=>theme.color.white };
`;

const Section5Wrapper = styled(SectionContainer)`
    min-height: auto;
    padding: 40px 80px;
    /* width: 100vw;
    max-width: 1440px;
    min-height: 100vh;
    background-color: ${ ({theme})=>theme.color.white };
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px; */
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

const TitleH2 = styled.h2`
    ${ ({theme})=>theme.type.h2 };
`;

const TitleH3 = styled.h3`
    ${ ({theme})=>theme.type.h3 };
`;

const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Row1Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`;

const ParagraphContainer = styled.div`
    width: 75%;
    padding: 40px 10px 20px 0;
    column-count: 3;
    column-gap: 20px;
    column-rule: none;
`;

const ImageContainer = styled.div`
    width: 25%;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`;

const StyledImage = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
`;


const CounterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 0;
`;

const CounterCol = styled.div`
    padding: 0 20px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Row2Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

`;

const PlotTitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const PlotTitle = styled.h3`
    font-family: Poppins, Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.3em;
    color: ${ ({ theme })=>theme.color.blue46 };
    text-transform: uppercase;
    margin: 10px 0;
`;

const PlotContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
`;

const PlotWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 20px 0;

    &::before{
        content: "";
        width: 120%;
        height: 100%;
        background-color: ${({ theme })=>theme.color.blue46 };
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 0;
    }
`;



const PlecaContainer = styled.div`
    width: 25%;

`;