import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';
import Info from './components/Info';

function App() {

  const [searchLetter, setSavedSearchLetter] = useState({});
  const [letter, setSavedLetter] = useState('');
  const [info, setSavedInfo] = useState({});

  useEffect(() => {
    // validar si el objeto esta vacio
    if(Object.keys(searchLetter).length === 0) return;

    const queryApiLetter = async () => {
      const {artist, song} = searchLetter;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      
      const [letter, dataArtist] = await Promise.all([
        axios(url),
        axios(url2),
      ]);

      setSavedLetter(letter.data.lyrics);
      setSavedInfo(dataArtist.data.artists[0]);
    }
    queryApiLetter();
  },[searchLetter])

  return (
    <Fragment>
      <Form
        setSavedSearchLetter={setSavedSearchLetter}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Song
              letter={letter}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
