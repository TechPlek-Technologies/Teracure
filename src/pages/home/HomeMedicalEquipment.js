import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyFive from "../../wrappers/hero-slider/HeroSliderTwentyFive";
import BannerTwentyFive from "../../wrappers/banner/BannerTwentyFive";
import FeatureIconFive from "../../wrappers/feature-icon/FeatureIconFive";
import BannerTwentySix from "../../wrappers/banner/BannerTwentySix";
// import TabProductSixteen from "../../wrappers/product/TabProductSixteen";
//import TabProductSixteen from "../../wrappers/product/TabProductSixteen";


const HomeMedicalEquipment = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Medical Equipment Home"
        description="Medical Equipment home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTwentyFive/>
        {/* banner */}
        <BannerTwentyFive spaceTopClass="pt-60" spaceBottomClass="pb-70" />
        {/* feature icon */}
        <FeatureIconFive spaceBottomClass="pb-100" />
         {/* tab product */}
         {/* <TabProductSixteen spaceBottomClass="pb-70" category="medical" /> */}
         {/* banner */}
         <BannerTwentySix spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeMedicalEquipment;