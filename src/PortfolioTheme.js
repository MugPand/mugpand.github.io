const portfolioTheme = {
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#67aff4',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
      background: {
        paper: '#373738'
      },
      text: {
        primary: '#ffe100',
        font: 'Roboto',
        fontWeight: 'bold'
      }
    },
};
  
export default portfolioTheme;