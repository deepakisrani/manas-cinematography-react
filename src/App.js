import './styling/App.css';

// Library Imports
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Created Imports
import { baseTheme } from './theme';
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


const App = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [isDarkTheme, setDarkTheme] = useState(prefersDarkMode);
    const palette = { ...baseTheme.palette, type: isDarkTheme ? 'dark' : 'light' }
    const themeObj = { ...baseTheme, palette  }

    const theme = createMuiTheme(themeObj);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
               
            <BrowserRouter>
                <Header toggleDarkMode={() => setDarkTheme(!isDarkTheme)} isDarkTheme={isDarkTheme} />
                <Container maxWidth="xl" classes={{ root: "app-container" }}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/about" exact component={About} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/contact" exact component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Container>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;