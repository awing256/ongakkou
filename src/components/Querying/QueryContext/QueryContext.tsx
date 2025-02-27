import { createContext } from 'react';
import {SongWithLyrics} from "../../../types/SongWithLyrics.ts";

interface QueryContextType {
    data: SongWithLyrics;
    loading: boolean;
    error: string | null;
    fetchData: (trackName: string, artistName: string) => void;
}

export const QueryContext = createContext<QueryContextType | undefined>(undefined);
