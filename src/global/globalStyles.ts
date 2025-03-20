import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 10px;
        padding: 0px;
    }

    body {
        background-color: #172242;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;