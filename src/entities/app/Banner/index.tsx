import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import LandingButton from "../LandingButton";

export default function Banner() {
  return (
    <div className="w-full h-[calc(100vh-45px)] relative">
      <video muted autoPlay loop className="w-full h-full object-cover">
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div className="inset-0 absolute bg-black opacity-30" />
      <Flex
        gap={20}
        align="center"
        justify="center"
        vertical
        className="absolute inset-0"
      >
        {/* <Title color="white" level={2}>Первая в мире медитация с использованием искусственного интеллекта</Title> */}
        <LandingButton />
      </Flex>
    </div>
  );
}
