import React, { useState } from 'react';
import './QueryInput.module.css';
import getLyricsService from "../../../api/services/GetLyricsService.ts";

const QueryInput: React.FC = () => {
    const [trackName, setTrackName] = useState<string>('');
    const [artistName, setArtistName] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setResponse(await getLyricsService.getLyricsByTitleAndArtist(trackName, artistName));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={trackName}
                    onChange={(e) => setTrackName(e.target.value)}
                    placeholder="Enter song title here"
                    required
                />
                <input
                    type="text"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    placeholder="Enter artist here"
                    required
                />
                <button type="submit">Submit</button>
            </form>

            {response && (
                <div>
                    <h3>Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default QueryInput;