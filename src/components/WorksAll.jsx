import styled from "styled-components";
import WorkCard from "./WorkСard";
import BigLink from "./BigLink";
import useLocalization from "../hooks/useLocalization";
import { useNavigate } from "react-router";

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
        margin-left: 10px;
        z-index: 2;

        background-color: ${({ theme }) => theme.allWorks.btnBack};
    }
`;

const WorksAll = () => {
    const textGlobal = useLocalization().local;
    const navigate = useNavigate();
    const works = textGlobal.work.works.map((work, index) => (
        <WorkCard onClick={()=>navigate(`/allworks/${index}`)} key={index} work={work} />
    ));

    return (
        <WorksAllStyled className="worksAll">
            <BigLink onClick={() => navigate(-1)} className="btn-back">
                {textGlobal.backButton}
            </BigLink>

            {/* <h2>{textGlobal.myWorks}</h2> */}
            <div className="worksAll_filter">
                
            </div>

            <div className="worksAll__grid">{works}</div>
        </WorksAllStyled>
    );
};

export default WorksAll;
