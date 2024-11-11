/**
 * @author Kennex666
 * @version 1.3
 * Custom Text component with custom font and size
 * @param { size } Font size constant
 * @param { ... } any - Other props
 */
import { Text as T } from "react-native";

/* Example
  <Text
    bold={true}
    italic={true}
    color={COLORS.secondary.text}
    underline={true}
    size="xl"
    textAlign="right"
    value="Testing Screen"
  />
*/

// interface TextProps {
//   children?: any;
//   style?: any;
//   size?:
//     | "xxs"
//     | "xs"
//     | "sm"
//     | "nm"
//     | "md"
//     | "lg"
//     | "xlg"
//     | "xl"
//     | "xxl"
//     | "xxxl"
//     | number;
//   bold?: boolean;
//   italic?: boolean;
//   textAlign?: "center" | "left" | "right";
//   color?: string;
//   underline?: boolean;
//   value?: string;
// }

export default function Text({
  children,
  style = {},
  size = 0,
  bold = false,
  italic = false,
  textAlign = "left",
  color = null,
  underline = false,
  value = "",
  ...props
}) {
  return (
    <T
      style={[
        size
          ? {
            fontSize: size
          }
          : {},
        bold ? { fontWeight: "bold" } : {},
        italic ? { fontStyle: "italic" } : {},
        textAlign ? { textAlign: textAlign } : {},
        color ? { color: color } : {},
        underline ? { textDecorationLine: "underline" } : {},
        // {
        //   fontFamily: "AvenirNextLTPro",
        // },
        style,
      ]}
      {...props}
    >
      {children ?? value ?? ""}
    </T>
  );
}