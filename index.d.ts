import { TextProps as BaseTextProps } from 'react-native'

export interface TextProps extends BaseTextProps {
  baseDeviceWidth?: number
}

export default function Text(props: TextProps): JSX.Element
