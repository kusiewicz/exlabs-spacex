import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
    }
    body {
        background-color: black; 
        background-image: linear-gradient(120deg, rgba(0,0,0,1) 0%, rgba(14,14,14,1) 28%, rgba(28,28,31,1) 55%, rgba(34,34,37,1) 68%, rgba(48,47,50,1) 91%);
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
