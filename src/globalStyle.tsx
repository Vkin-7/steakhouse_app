import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        /* width */
        &::-webkit-scrollbar {
            width: .7rem;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: ${props => props.theme.primary};
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.secondary};
            border-radius: 1rem;
            border: .1rem solid ${props => props.theme.primary};
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            filter: brightness(.5);
        }
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        min-width: 100vw;
        max-width: 100vw;
        min-height: 100vh;

        font-size: 10px;
        color: ${props => props.theme.text.primary};

        background-color: ${props => props.theme.primary};
        -webkit-font-smoothing: antialiased !important;

        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.text.primary};
    }

    .cursive {
        font-family: 'Inspiration', sans-serif;
    }

    @keyframes fadeAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
`;

export default GlobalStyle;