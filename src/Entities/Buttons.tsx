export enum ButtonAction {
  LINK
}

export type ButtonType = {
  text: string;
  color: string;
  textColor: string;
  action: ButtonAction;
  redirectTo?: string;
  link?: boolean
  icon?: any;
}