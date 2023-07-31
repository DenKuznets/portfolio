import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import Header from "../components/Header";
import { colors } from "../../utils";
import Footer from "../components/Footer";
import BigLink from "../components/BigLink";
import useLocalization from "../hooks/useLocalization";

const MainPage = () => {
    const textGlobal = useLocalization().local;

    return (
        <>
            <Header />
            <main>
                <Hero />

                <section style={{ padding: 0 }} id="work">
                    <h2
                        style={{
                            textAlign: "center",
                            padding: "1em 0",
                            backgroundColor: colors.violet,
                            color: colors.white,
                        }}
                    >
                        {textGlobal.header.nav.work}
                    </h2>
                    <WorkSection id={0} workColor="violet" />
                    <WorkSection id={1} workColor="default" />
                    <WorkSection id={2} workColor="yellow" />
                    <div
                        style={{
                            backgroundColor: `${colors.white}`,
                            display: "flex",
                            justifyContent: "center",
                            padding: "2em 0",
                        }}
                    >
                        <BigLink to="allworks" onClick={()=>window.scrollTo(0,0)}>
                            {textGlobal.allWorks}
                        </BigLink>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default MainPage;
