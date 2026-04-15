import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import MainLayout from './layouts/MainLayout';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

// App content component that uses theme
function AppContent() {
  const { currentTheme } = useTheme();
  
  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
