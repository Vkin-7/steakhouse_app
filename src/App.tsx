import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './globalStyle';
import useThemeDetector from './hooks/useThemeDetector';

import dark from './themes/dark';
import light from './themes/light';

function App() {
  const isDarkTheme = useThemeDetector();
  console.log(isDarkTheme)

  return (
    <>
      <ThemeProvider theme={ isDarkTheme ? dark : light }>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App