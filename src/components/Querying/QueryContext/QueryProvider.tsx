import React, {useState} from 'react';
import getLyricsService from "../../../api/services/GetLyricsService.ts";
import {QueryContext} from "./QueryContext.tsx";
import {SongWithLyrics} from "../../../types/SongWithLyrics.ts";


// Custom provider that calls lyrics service
const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<SongWithLyrics>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (trackName: string, artistName: string) => {
        setLoading(true);
        try {
            setData(await getLyricsService.getLyricsByTitleAndArtist(trackName, artistName));
            setError(null);
        } catch (e) {
            console.error('Error submitting query:', e);
            setError('Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };

    const value = { data, loading, error, fetchData };

    return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

export default QueryProvider;
