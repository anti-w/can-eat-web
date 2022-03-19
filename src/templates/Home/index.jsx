import { Heading } from "../../components/Heading";
import {Toggle} from '../../components/Toggle'
import {useDarkMode} from '../../styles/useDarkMode'
import {SectionContainer} from '../../components/SectionContainer'

import {GlobalStyles} from '../../styles/global-styles'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";

function Home() {

  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <SectionContainer>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme}/>   
        <Heading size="small">
          Olá
        </Heading>
     </SectionContainer>

    </ThemeProvider>
    
  )
}

export default Home;
