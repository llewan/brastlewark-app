import React, { useState } from 'react';
import data from '../data/data.json';
import Card from './card/card';
import Search from './search/search';
import Modal from './modal/modal';

const App = () => {
  const [citizens, setCitizens] = useState(data.Brastlewark);
  const [selectedCitizen, setSelectedCitizen] = useState(null);

  const doFilter = (searchTerm) => {
    const filterByName = citizen => citizen.name.toLowerCase().includes(searchTerm);
    const results = data.Brastlewark.filter(filterByName);
    setCitizens(results);
  }

  const handleModal = (citizenId) => {
    const sCitizen = data.Brastlewark.find(c => c.id === citizenId);
    setSelectedCitizen(sCitizen);
  }

  const renderResults = () => citizens.map(citizen =>
    <Card {...citizen} onSelect={handleModal} key={citizen.id} />)

  return (
    <section className="app">
      <h2>Brastlewark</h2>
      <Search onSearch={doFilter} />
      <div className="app__body">
        { citizens.length ? renderResults() : <span>No results were found</span>}
      </div>
      <Modal
        onClose={handleModal}
        citizen={selectedCitizen}
      />
    </section>
  );
};

export default App;