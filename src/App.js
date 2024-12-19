import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { mainNavbarItems } from './components/consts/NavbarItems';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      {/* Render Navbar in App */}
      <Navbar items={mainNavbarItems} />

      {/* Dynamically generate routes based on mainNavbarItems */}
      <Grid style={{flex: 1, padding: '16px'}}>
        <Routes>
          {mainNavbarItems.map((items) => (
            <Route
              key={items.id} // Ensure each Route has a unique key
              path={'/${items.route}'} // Dynamically use the route from the array
              element={<div>{items.label} Page</div>} // Render page content dynamically
            />  
          ))}


          {/* Static routes */}
          <Route path="/pulse" element={<div>Pulse Page</div>} />
          <Route path="/health" element={<div>Health Page</div>} />
          <Route path="/thermo" element={<div>Thermostat Page</div>} />
          <Route path="/fitness" element={<div>Fitness Page</div>} />
          <Route path="/weight" element={<div>Weight Page</div>} />
          <Route path="/sleep" element={<div>Sleep Page</div>} />
          <Route path="/nutrition" element={<div>Nutrition Page</div>} />
          <Route path="/hydration" element={<div>Hydration Page</div>} />
          <Route path="/mood" element={<div>Mood Page</div>} />
          <Route path="/Medical Information" element={<div>Medical Information Page</div>} />
          <Route path="/Cholesterol" element={<div>Cholesterol Page</div>} />
          <Route path="/Covid" element={<div>Coronavirus Page</div>} />
          <Route path="/Vaccines" element={<div>Vaccine Information Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
          <Route path="/search" element={<div>Search Page</div>} />
        </Routes>  
      </Grid>
    </Grid>     
  );  
} 

export default App;
