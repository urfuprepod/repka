"use client";

import { useEffect, useRef, useState } from "react";
import RecordRTC from "recordrtc";

// Фикс для Next.js SSR
if (typeof window !== "undefined") {
  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.webkitGetUserMedia ||
    window.navigator.mozGetUserMedia;
}

export default function VoiceRecorder() {
  const [recorder, setRecorder] = useState<RecordRTC | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const recordRTC = new RecordRTC(stream, {
        type: "audio",
        mimeType: "audio/wav",
      });

      recordRTC.startRecording();
      setRecorder(recordRTC);
    } catch (err) {
      console.error("Ошибка доступа к микрофону:", err);
    }
  };

  const stopRecording = () => {
    if (!recorder) return;

    recorder.stopRecording(() => {
      const blob = recorder.getBlob();
      setAudioUrl(URL.createObjectURL(blob));
      recorder.destroy();
      setRecorder(null);
    });
  };

  useEffect(() => {
    return () => {
      if (recorder) {
        console.log(recorder, 'recorder')
        recorder.destroy();
      }
    };
  }, [recorder]);

  // Проверка доступности API
  if (typeof window === "undefined" || !window.navigator.mediaDevices) {
    return <div>Запись голоса недоступна в этом браузере</div>;
  }

  return (
    <div>
      <button onClick={startRecording}>Начать запись</button>
      <button onClick={stopRecording}>Остановить</button>
      {audioUrl && <audio ref={audioRef} src={audioUrl} controls />}
    </div>
  );
}
