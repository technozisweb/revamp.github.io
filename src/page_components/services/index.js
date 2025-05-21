import ConcurrentBlock from "@/modules/concurrent_block";
import DetailsCards from "@/modules/details_card";
import Hero from "@/modules/hero";
import DescriptionStepper from "@/modules/description_stepper";
import FeaturedCards from "./featuredCards";
import FeaturePointers from "@/modules/features_pointers";
import FlipCards from "@/modules/flip_cards";
import Accordion from "@/modules/accordions";
import useMedia from "@/hooks/useMedia";
import styles from "./style.module.scss";

const renderSections = (sections, isMobile, isDesktop) => {
  if (!Array.isArray(sections) || sections.length === 0) {
    return <div>No sections available</div>; // Fallback for missing or empty sections
  }

  // Sort sections by their index
  const sortedSections = sections.sort((a, b) => a.index - b.index);

  // Render each section dynamically
  return sortedSections.map((section) => {
    switch (section.type) {
      case "primaryData":
        return <Hero key={section.index} data={section.data} />;
      case "concurrentContent":
        return (
          <ConcurrentBlock
            key={section.index}
            concurrentContent={section.data}
          />
        );
      case "concurrentText":
        return (
          <ConcurrentBlock
            key={section.index}
            concurrentContent={section.data}
          />
        );
      case "quickViewCards":
        return <DetailsCards key={section.index} data={section.data} />;
      case "stepperContent":
        return <DescriptionStepper key={section.index} data={section.data} />;
      case "featuredCards":
        return <FeaturedCards key={section.index} />;
      // case "cardsGrid":
      //   return <CardsGrid key={section.index} data={section.data} />;
      case "featurePointers":
        return <FeaturePointers key={section.index} data={section.data} />;
      case "flipCards":
        return <FlipCards data={section.data} isMobile={isMobile} />;
      default:
        return null;
    }
  });
};

const ServicePage = ({ serviceData = {} }) => {
  const { isMobile, isDesktop } = useMedia();
  if (!serviceData || !serviceData.sections) {
    return <div>Data not available</div>; // Fallback for missing data
  }

  return (
    <div>
      <div className={styles.serviceMain}>
        {renderSections(serviceData.sections, isMobile, isDesktop)}
      </div>  
      {/* <Accordion /> */}
    </div>
  );
};

export default ServicePage;
