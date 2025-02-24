import React, { useState } from 'react';
import axios from 'axios';
import './QueryInput.module.css';

const QueryInput: React.FC = () => {
    const [trackName, setTrackName] = useState<string>('');
    const [artistName, setArtistName] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const params ={
                artist_name: artistName,
                track_name: trackName,
                album_name: null,
                duration: null
            }
            const result = await axios.get('https://lrclib.net/api/get', {params});
            setResponse(JSON.stringify(result.data, null, 2));
        } catch (error) {
            console.error('Error submitting query:', error);
            setResponse('An error occurred while submitting the query.');
        }
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