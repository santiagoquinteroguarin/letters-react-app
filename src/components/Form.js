import React, { useState } from 'react';

const Form = () => {

    const [search, setSavedSearch] = useState({
        artist: '',
        song: '',
    });
    const [error, setSavedError] = useState(false);

    const { artist, song } = search;

    const updateState = e => {
        setSavedSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const searchData = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === '') {
            setSavedError(true);
            return;
        }

        setSavedError(false);

        // pasar al main component
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={searchData}
                        className="col card text-white bg-transparent mb-5 pt-5 pb--2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;