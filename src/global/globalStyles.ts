import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 10px;
        padding: 0px;

        font-family: 'Inter';

        overflow-x: hidden;
    }

    body {
        overflow-x: hidden;

        background-color: #172242;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;