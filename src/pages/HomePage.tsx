import { ContainerMain } from "../components/ContainerMain";

import WebToolsSection from "../components/WebToolsSection";
import MainScreenSection from "../components/MainScreenSection";

const HomePage = () => {
  return (
    <ContainerMain className="py-0 sm:py-0 lg:py-0">
      <MainScreenSection />
      <WebToolsSection />
    </ContainerMain>
  );
};

export default HomePage;
