import './QueryDisplay.module.css';
import {useQueryData} from "../../../hooks/useQueryData.ts";
import {useEffect, useState} from "react";
import {splitLyrics} from "../../../utils/lyricSplitter.ts";
import {FuriganaText} from "./LyricLine.tsx";

const QueryDisplay: React.FC = () => {
    const {data} = useQueryData();
    const [lyrics, setLyrics] = useState<string[]>([])

    useEffect(()=>{
        setLyrics(data ? splitLyrics(data.plainLyrics): []);
    },[data])
    return (
        <div>
            {lyrics ? lyrics.map((line,index)=> (
                <div key={index} className={"lyrics-line-" + line}>
                    <FuriganaText text={line}/>
                </div>
            )) : null}
        </div>
    );
};

export default QueryDisplay;