export interface RxSulfateProps {
  slots?: any;
  children: any;
}

export interface RxSulfateChildrenProps {
  children: React.ReactNode[];
  config: RxSulfateConfig;
}

export interface RxSulfateWrapperProps {
  slot?: string;
  children: React.ReactElement;
}

export enum RxSulfateMode {
  MULTIPLE,
  FULL_SCREEN,
}

export interface RxSulfateConfig {
  items: number;
  height?: number;
  loop?: boolean;
  dots?: boolean;
  navigate?: boolean;
  autoplay?: boolean;
  mode: RxSulfateMode;
}
