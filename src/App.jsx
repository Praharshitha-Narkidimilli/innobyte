import React from 'react';
import About from './components/Home/About';
import Home from './components/Home/Home';
import Room from './components/Home/Rooms';
import Services from './components/Home/Services';
import Form from './components/Home/form';
import Map from './components/Home/map';
import Footer from './components/Home/footer';
import Gallery from './components/Home/Gallery';


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <section id="home" className="h-auto">
        <Home />
      </section>

      <section id="about" className="h-auto">
          <About />
      </section>

      <section id="rooms" className="h-auto">
        <Room />
      </section>
      
      <section id="services" className="h-auto">
        <Services />
      </section>

      <section id="gallery" className="h-auto">
        <Gallery />
      </section>
      {/* <Food /> */}

      <section id="contact" className="h-auto">
        <Form />
      </section>

      <Map />

      <Footer />
    </div>
  );
};

export default App;
