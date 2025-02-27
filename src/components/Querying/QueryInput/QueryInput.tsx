import React, {useState} from 'react';
import './QueryInput.module.css';
import {useQueryData} from "../../../hooks/useQueryData.ts";

const QueryInput: React.FC = () => {
    const [trackName, setTrackName] = useState<string>('');
    const [artistName, setArtistName] = useState<string>('');
    const {fetchData} = useQueryData()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        fetchData(trackName, artistName);
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
        </div>
    );
};

export default QueryInput;