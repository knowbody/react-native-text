import { TextProps as BaseTextProps } from 'react-native';

export interface TextProps extends BaseTextProps {
  deviceBaseWidth?: number;
  style?: any;
  children: string;
}

export interface ScaledStyles {
  fontSize: number;
  lineHeight: number;
}

interface ScaleTextOptions {
  deviceBaseWidth: number;
  fontSize?: number;
  lineHeight?: number;
}

export default function Text(props: TextProps): JSX.Element;
export function scaleText(options: ScaleTextOptions): ScaledStyles;
