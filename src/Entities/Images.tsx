export enum ImageAlignmentH {
  LEFT,
  CENTER,
  RIGHT
}

export type ImageType = {
  url: any;
  height: number;
  width: number;
  alignmentH: ImageAlignmentH
}