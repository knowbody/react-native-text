import { TextProps as BaseTextProps } from 'react-native'

interface TextProps extends BaseTextProps {
  baseDeviceWidth?: number
}

export default function Text(props: TextProps): JSX.Element {}
