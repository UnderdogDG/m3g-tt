import { createGlobalStyle } from 'styled-components';

const fontWeight = {
    regular: 400,
    medium: 500,
    semibold: 600,
    black: 900,
};

const color = {
    white: '#FFFFFF',
    blue77: '#77c1fe',
    blue46: '#468feb',
    blue28: '#2871cd',
    blue00: '#00409a',
    gray00: '#0009',
    graybd: '#e0e0e0',
};

export const theme = {
    color: {
        ...color
    },
    type:{
        main: {
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontSize: '16px',
            fontWeight: fontWeight.regular,
            color: color.white,
            padding: '0',
            margin: '0'
        },
        h2: {
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontSize: '40px',
            fontWeight: fontWeight.medium,
            color: color.blue28,
            letterSpacing: '0.5em',
            padding: '0.5em 0',
            margin: '0'
        },
        h3: {
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontSize: '10px',
            fontWeight: fontWeight.medium,
            color: color.blue77,
            padding: '0.5em 0',
            margin: '0'
        },
        plotTitle: {
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontSize: '16px',
            fontWeight: fontWeight.medium,
            color: color.white,
            padding: '0',
            margin: '0'
        },
        plotBarTitle: {
            fontFamily: 'Poppins, Montserrat, sans-serif',
            fontSize: '14px',
            fontWeight: fontWeight.medium,
            color: color.white,
            padding: '0',
            margin: '0'
        },
        family: 'Poppins, Montserrat, sans-serif',
        lineHeight: 1.2,
        
    },

    border:{
        borderWidth: '8px',
        borderStyle: 'solid',
        borderColor: color.blue28
    }
}

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: Poppins, Montserrat, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.2;
    }

    div, span, section, article{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    p{
        margin: 0;
    }
`;