'use client';

import { useReactMediaRecorder } from 'react-media-recorder';

type RecordControls = {
  startRecording: () => void;
  stopRecording: () => void;
  pauseRecording: () => void;
  resumeRecording: () => void;
  mediaBlobUrl?: string;
  status: 'idle' | 'recording' | 'paused' | 'stopped';
  error: string;
};

export default function VoiceRecorder() {
  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
    status,
    error
  } = useReactMediaRecorder({ 
    audio: true,
    onStop: (blobUrl: string, blob: Blob) => {
      console.log('Запись сохранена:', blob);
    }
  });

  // Скачать запись
  const downloadRecording = () => {
    if (!mediaBlobUrl) return;
    
    const link = document.createElement('a');
    link.href = mediaBlobUrl;
    link.download = `recording_${new Date().toISOString()}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Запись голоса</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
          ⚠️ Ошибка: {error}
        </div>
      )}

      <div className="flex gap-3 mb-4">
        <button
          onClick={startRecording}
          disabled={status === 'recording'}
          className={`px-4 py-2 rounded-md text-white font-medium flex-1 transition-colors
            ${status === 'recording' ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {status === 'recording' ? '● Запись...' : 'Начать запись'}
        </button>
        
        <button
          onClick={stopRecording}
          disabled={status !== 'recording'}
          className={`px-4 py-2 rounded-md text-white font-medium flex-1 transition-colors
            ${status !== 'recording' ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
        >
          Остановить
        </button>
      </div>

      {mediaBlobUrl && (
        <div className="space-y-4">
          <audio 
            src={mediaBlobUrl} 
            controls 
            className="w-full rounded-md"
          />
          <button
            onClick={downloadRecording}
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium"
          >
            Скачать запись (.mp3)
          </button>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        {status === 'recording' ? (
          <p>Запись в процессе...</p>
        ) : (
          <p>Нажмите "Начать запись"</p>
        )}
      </div>
    </div>
  );
}