import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';

function App() {

  const [searchLetter, setSavedSearchLetter] = useState({});
  const [letter, setSavedLetter] = useState('');

  useEffect(() => {
    // validar si el objeto esta vacio
    if(Object.keys(searchLetter).length === 0) return;

    const queryApiLetter =async () => {
      const {artist, song} = searchLetter;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const response = await axios.get(url);

      setSavedLetter(response.data.lyrics);
    }
    queryAPI();
  },[searchLetter])

  return (
    <Fragment>
      <Form
        setSavedSearchLetter={setSavedSearchLetter}
      />
    </Fragment>
  );
}

export default App;
