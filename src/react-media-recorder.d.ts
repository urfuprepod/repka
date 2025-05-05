declare module 'react-media-recorder' {
  type RecordingStatus = 'idle' | 'recording' | 'paused' | 'stopped';

  interface ReactMediaRecorderProps {
    audio?: boolean;
    video?: boolean;
    screen?: boolean;
    onStop?: (blobUrl: string, blob: Blob) => void;
    blobPropertyBag?: BlobPropertyBag;
  }

  interface ReactMediaRecorderRenderProps {
    startRecording: () => void;
    stopRecording: () => void;
    pauseRecording: () => void;
    resumeRecording: () => void;
    mediaBlobUrl?: string;
    status: RecordingStatus;
    error: string;
    previewStream?: MediaStream | null;
    clearBlobUrl: () => void;
  }

  export function useReactMediaRecorder(
    config: ReactMediaRecorderProps
  ): ReactMediaRecorderRenderProps;
}