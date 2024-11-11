import React from "react";
import Header from "./components/organisms/Header";
import MainSection from "./components/organisms/Mainsection";
import Project from "./components/organisms/Project";
import Worktog from "./components/organisms/Worktog";
import Useasexetens from "./components/organisms/Useasexetens";
import Customizesction from "./components/organisms/Customizesction";
import Workevery from "./components/organisms/Workevery";
import Datasecurity from "./components/organisms/Datasecurity";
import Favoriteapps from "./components/organisms/Favoriteapps";
import TestimonialsSection from "./components/organisms/TestimonialsSection";
import Trywhitepace from "./components/organisms/Trywhitepace";
import Footer from "./components/organisms/Footer";
import PricingPage from "./components/templates/PricingPage";


function Overall() {

    return (
        <div class=" flex flex-col items-center justify-between min-h-screen  md:mx-auto">
            <div class=" max-w-8xl mx-auto ">
                <Header />
                <MainSection />
                <Project />
                <Worktog />
                <Useasexetens />
                <Customizesction />
                <PricingPage />
                <Workevery />
                <Datasecurity />
                <Favoriteapps />
                <TestimonialsSection />
                <Trywhitepace />
                <Footer />
            </div>
        </div>





    );


}

export default Overall;