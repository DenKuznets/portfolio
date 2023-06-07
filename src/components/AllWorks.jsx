import styled from "styled-components";
import WorkSmall from "./WorkSmall";
import BigLink from "./BigLink";
import useLocalization from "../hooks/useLocalization";

const AllWorksStyled = styled.section`
    padding-top: 1em;
    margin: 0 auto;
    padding-bottom: 3em;
    h2 {
        text-align: center;
        margin-bottom: 1em;
    }
    .allworks__grid {
        /* background-color: red; */
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(2, 1fr);
        @media only screen and (max-width: 869px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .btn-back {
        width: fit-content;
        position: sticky;
        top: 20px;
        z-index: 2;
        /* background-color: transparent; */
    }
`;

const AllWorks = ({ backToMain }) => {
    const textGlobal = useLocalization().local;

    const works = textGlobal.work.works.map((work, index) => (
        <WorkSmall key={index} work={work} />
    ));

    return (
        <AllWorksStyled>
            <BigLink to="/" className="btn-back" onClick={backToMain}>
                {textGlobal.work.backButton}
            </BigLink>
            <h2>{textGlobal.work.myWorks}</h2>
            <div className="allworks__grid">{works}</div>
        </AllWorksStyled>
    );
};

export default AllWorks;
