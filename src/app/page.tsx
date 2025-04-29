import Image from "next/image";
import "antd/dist/reset.css";
import { Banner, CarouselBlock, InformationBlock } from "@/entities/app";

export default function Home() {
  return (
    <>
      <Banner />
      <InformationBlock />
      <CarouselBlock />
    </>
  );
}
