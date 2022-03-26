import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './globalStyle';
import useThemeDetector from './hooks/useThemeDetector';
import './locales';

import dark from './themes/dark';
import light from './themes/light';
import NavBarTop from './components/NavBarTop';

function App() {
  const isDarkTheme = useThemeDetector();

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