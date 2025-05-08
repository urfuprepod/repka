import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Banner, CarouselBlock, InformationBlock } from "@/entities/app";
import { Metadata } from "next";


const metadata: Metadata = {
  title: "Сайт медитации",
  ...NO_INDEX_PAGE,
};

export default function Home() {
  return (
    <>
      <Banner />
      <InformationBlock />
      <CarouselBlock />
    </>
  );
}
