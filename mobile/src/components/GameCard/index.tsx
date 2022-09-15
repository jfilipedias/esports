import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends GameCardProps, TouchableOpacityProps {}

export function GameCard({ id, name, ads, cover, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={cover} />
    </TouchableOpacity>
  );
}
