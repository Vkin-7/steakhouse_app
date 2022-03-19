import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inspiration&family=Roboto:wght@100;400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        min-width: 100vw;
        max-width: 100vw;

        min-height: 100vh;
    }
`;

export default GlobalStyle;