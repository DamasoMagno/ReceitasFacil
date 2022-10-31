import "styled-components";

import { DefaultTheme } from "../styles/Themes";

type CustomThemes = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomThemes {}
}