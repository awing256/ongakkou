import './QueryDisplay.module.css';
import {useQueryData} from "../../../hooks/useQueryData.ts";
import {useEffect, useState} from "react";
import {splitLyrics} from "../../../utils/lyricSplitter.ts";

const QueryDisplay: React.FC = () => {
    const data = useQueryData();
    const [lyrics, setLyrics] = useState<string[]>([])

    useEffect(()=>{
        setLyrics(splitLyrics(data.data.plainLyrics));
    },[data])
    return (
        <div>
            {lyrics.map((line,index)=> (
                <div key={index} className={"lyrics-line-" + line}>
                    {line}
                </div>
            ))}
        </div>
    );
};

export default QueryDisplay;