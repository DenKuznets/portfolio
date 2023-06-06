import styled from "styled-components";

const modalContentColumn = "900px";

const WorkModalStyled = styled.div`
    position: fixed;
    overflow-y: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    background-color: ${({ theme }) => theme.workModal.bg};

    .modal__content {
        display: flex;
        gap: 100px;
        padding: 50px;
        height: 100%;
        width: 100%;
        max-width: 1800px;
        margin: 0 auto;
        @media only screen and (max-width: ${modalContentColumn}) {
            flex-direction: column;
            min-height: 100%;
            height: unset;
            gap: 40px;
        }
        @media only screen and (max-width: 530px) {
            padding: 50px 10px;
        }
    }
    h3 {
        margin-bottom: 1em;
    }
    p {
        white-space: pre-line;
        margin-top: 30px;
        min-width: 300px;
        color: inherit;
        @media only screen and (max-width: ${modalContentColumn}) {
            padding-left: 0;
        }
    }

    ul{
        margin-bottom: 1em;
    }

    li {
        border: 1px dotted ${({ theme }) => theme.workModal.border};
    }

    .btn-back {
        width: fit-content;
        margin-top: 2em;
    }

    .live-preview {
        background-color: white;
        flex-basis: 1000px;
        min-width: 380px;
        background-color: transparent;
        @media only screen and (max-width: ${modalContentColumn}) {
            min-height: 70vh;
            flex-basis: unset;
        }
        @media only screen and (max-width: 420px) {
            display: none;
        }
        h3 {
            text-align: center;
            margin-bottom: 10px;
            color: inherit;
        }
        iframe {
            width: 100%;
            min-height: 80vh;
            overflow: auto;
        }
    }
`;

export default WorkModalStyled;
