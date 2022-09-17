import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 180,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 20,
    marginRight: 16,
  },
  button: {
    width: "100%",
    height: 36,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 10,
  },
});
