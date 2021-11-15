import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'My projects',
    },
    { name: 'Resume', description: 'Look at my resume!' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

 

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <footer>
        <a href="https://github.com/ddcrane">Github</a>
        <a href="https://www.linkedin.com/in/david-crane-62a65a218/">LinkedIn</a>
        <a href="https://stackoverflow.com/users/15956694/ddcrane">Stack Overflow</a>
    </footer>
    </div>
    
  );
}

export default App;
