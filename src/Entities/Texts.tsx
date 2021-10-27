export enum TextFont {
  TITLE,
  BODY,
  TITLE_LINK,
  BODY_LINK
}

export type TextType = {
  size: number;
  font: TextFont,
  label: string,
  otherStyle?: any
}