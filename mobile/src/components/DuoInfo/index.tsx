import { ColorValue, Text, View } from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

interface Props {
  label: string;
  value: string;
  valueColor?: ColorValue;
}

export function DuoInfo({
  label,
  value,
  valueColor = THEME.COLORS.TEXT,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Text style={[styles.value, { color: valueColor }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
