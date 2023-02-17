import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const MainSection = styled.section`
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const SectionContainer = styled.div`
    width: 100%;
    max-width: 2400px;
    min-height: 100vh;
    /* background-color: ${ ({theme})=>theme.color.white }; */
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px;
    
`;

export const RowContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`;

export const Col20 = styled(Flex)`
    width: 20%;
`;

export const Col25 = styled(Flex)`
    width: 25%;
`;

export const Col33 = styled(Flex)`
    width: 33.33%;
`;

export const Col45 = styled(Flex)`
    width: 45%;
`;

export const Col50 = styled(Flex)`
    width: 50%;
`;

export const Col66 = styled(Flex)`
    width: 66.66%;
`;

export const Col80 = styled(Flex)`
    width: 80%;
`;

export const Col100 = styled(Flex)`
    width: 100%;
`;

export const StyledImage = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ResposiveContainer = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`;

export const ResponsiveImage = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
`;

