import styled from "styled-components";

const WorksAllStyled = styled.section`
    padding-top: 1em;
    margin: 0 auto;
    padding-bottom: 3em;
    h2 {
        text-align: center;
        margin-bottom: 1em;
    }
    .worksAll__grid {
        /* background-color: red; */
        margin: 0 auto;
        max-width: 1400px;
        display: flex;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
        @media only screen and (max-width: 869px) {
        }
    }

    .btn-back {
        width: fit-content;
        position: sticky;
        top: 20px;
        margin-left: 10px;
        z-index: 2;

        background-color: ${({ theme }) => theme.allWorks.btnBack};
    }
`;

export default WorksAllStyled;
