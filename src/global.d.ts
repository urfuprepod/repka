// types/global.d.ts
interface Navigator {
  getUserMedia?: (
    constraints: MediaStreamConstraints,
    success: (stream: MediaStream) => void,
    error: (error: Error) => void
  ) => void;
  webkitGetUserMedia?: typeof navigator.getUserMedia;
  mozGetUserMedia?: typeof navigator.getUserMedia;
  msGetUserMedia?: typeof navigator.getUserMedia;
}
interface ICarouselElement {
  title: string;
  paragraphs: string | string[];
}
type CreationForm = {
  items: GridItem[];
  name: string;
  label: string;
  itemsInLine: number
}[];
