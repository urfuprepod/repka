"use client";

import { useRouteGuard } from "@/processes/hooks";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { Pause, Play } from "lucide-react";
import React, { useRef, useState } from "react";

const MeditationPage = () => {
  useRouteGuard();

  const [isRecord, setIsRecord] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isRecord) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsRecord((prev) => !prev);
    }
  };

  return (
    <Flex vertical gap={20} align="center">
      <Title>Прослушать медитацию</Title>

      <div className="relative w-[50%] bg-[#CD5C5C] rounded-md h-[50vh]">
        <button
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {React.createElement(isRecord ? Pause : Play, {
            size: 40,
            color: "#2b2727",
            strokeWidth: 2.5,
          })}
        </button>
      </div>

      <audio
        ref={audioRef}
        src="/audio.mp3" // Путь к файлу в public
        loop={false} // Отключаем зацикливание
      />
    </Flex>
  );
};

export default MeditationPage;
