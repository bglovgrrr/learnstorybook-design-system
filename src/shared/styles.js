import { css } from "styled-components";

// Global style variables
export const background = {
  app: "#F6F9FC",
  appInverse: "#7A8997",
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF"
};

export const color = {
  // Palette
  primary: "#0069FF", // blue
  secondary: "#8C42FF", // purp
  tertiary: "#CAD6E0",

  orange: "#FEA503",
  gold: "#FFDF06",
  green: "#08C05D",
  seafoam: "#37D5D3",
  purple: "#8C42FF",
  ultraviolet: "#2A0481",

  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F5F8FA",
  light: "#EBEEF3",
  mediumlight: "#DBE3E9",
  medium: "#CAD6E0",
  mediumdark: "#909EAE",
  dark: "#5F6E80",
  darker: "#313B51",
  darkest: "#181F31",

  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#08C05D",
  negative: "#DD002B",
  warning: "#FEA503"
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30
  },
  borderRadius: {
    small: 5,
    default: 10
  }
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  size: {
    s1: "13",
    s2: "14",
    s3: "16",
    m1: "20",
    m2: "24",
    m3: "28",
    l1: "32",
    l2: "40",
    l3: "48",
    code: "90"
  }
};

export const breakpoint = 600;
export const pageMargin = "5.55555";

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
