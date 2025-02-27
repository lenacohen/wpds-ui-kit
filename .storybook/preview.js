import {
  globalStyles,
  darkModeGlobalStyles,
  darkTheme,
  theme,
  Box,
  styled,
} from "@washingtonpost/wpds-ui-kit";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: "#root",
    manual: false,
  },
  backgrounds: {
    default: "story",
    values: [
      {
        name: "story",
        value: theme.colors.gray500,
      },
    ],
  },
};

const Panel = styled("div", {
  padding: theme.space[200],
  marginTop: "-$100",
  marginBottom: "-$100",
  width: "50%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    dark: {
      true: {
        backgroundColor: theme.colors.gray500,
      },
    },
  },
});

function GlobalStyles(props) {
  globalStyles();
  return <Panel>{props.children}</Panel>;
}

function DarkPanel(props) {
  globalStyles();
  darkModeGlobalStyles();
  return (
    <Panel className={darkTheme} dark>
      {props.children}
    </Panel>
  );
}

export const decorators = [
  (renderStory) => (
    <Box
      css={{
        display: "flex",
        width: "100%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GlobalStyles>{renderStory()}</GlobalStyles>
      <DarkPanel>{renderStory()}</DarkPanel>
    </Box>
  ),
];
