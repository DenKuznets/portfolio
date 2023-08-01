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
    }

    .btn-back {
        width: fit-content;
        position: fixed;
        top: 20px;
        margin-left: 10px;
        z-index: 2;
        background-color: ${({ theme }) => theme.allWorks.btnBack};
        @media only screen and (max-width: 600px) {
            top: unset;
            bottom: 20px;
            right: 1rem;
        }
    }
`;

export default WorksAllStyled;
