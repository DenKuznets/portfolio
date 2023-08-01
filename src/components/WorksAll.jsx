import WorkCard from "./WorkСard";
import BigLink from "./BigLink";
import useLocalization from "../hooks/useLocalization";
import { useNavigate } from "react-router";
import {
    Button,
    Container,
    Grid,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import WorksAllStyled from "./styled/WorksAll.styled";
import { colors } from "../../utils";
import { useMemo, useState } from "react";

const theme = createTheme({
    typography: {
        fontFamily: "'Merriweather', serif",
    },
    palette: {
        primary: {
            main: colors.darkViolet,
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "xl",
            },
        },
    },
});

const WorksAll = () => {
    const textGlobal = useLocalization().local;
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const filters = useMemo(
        () => [...new Set(textGlobal.work.works.map((work) => work.category))],
        [textGlobal]
    );
    const workCardsList = selected
        ? textGlobal.work.works.filter((work) => work.category === selected)
        : textGlobal.work.works;

    const workCards = workCardsList.map((work, index) => (
        <Grid sm={12} md={6} xl={4} item key={index}>
            <WorkCard
                onClick={() => navigate(`/allworks/${index}`)}
                work={work}
            />
        </Grid>
    ));

    return (
        <ThemeProvider theme={theme}>
            <WorksAllStyled className="worksAll">
                <BigLink onClick={() => navigate(-1)} className="btn-back">
                    {textGlobal.backButton}
                </BigLink>
                <Container
                    sx={{
                        mb: 4,
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        mt: { xs: "0", sm: "5rem", lg: "2rem" },
                        // backgroundColor: "red",
                    }}
                >
                    <Button
                        onClick={() => setSelected("")}
                        variant={selected === "" ? "contained" : "outlined"}
                    >
                        {textGlobal.allWorks}
                    </Button>
                    {filters.map((filter, index) => {
                        return (
                            <Button
                                onClick={() => setSelected(filter)}
                                key={index}
                                variant={
                                    selected === filter
                                        ? "contained"
                                        : "outlined"
                                }
                            >
                                {textGlobal.work.categories[filter]}
                            </Button>
                        );
                    })}
                </Container>
                <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid container spacing={2}>
                        {workCards}
                    </Grid>
                </Container>
            </WorksAllStyled>
        </ThemeProvider>
    );
};

export default WorksAll;
