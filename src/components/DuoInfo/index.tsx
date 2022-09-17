import { ColorValue, Text, View } from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

interface InfoProps {
  label: string;
  info: string;
  colorValue?: ColorValue;
}

export function DuoInfo({ label, info, colorValue = THEME.COLORS.TEXT}: InfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label} numberOfLines={1} >{label}</Text>
      <Text style={[styles.info, { color: colorValue}]} numberOfLines={1}>{info}</Text>
    </View>
  );
}
