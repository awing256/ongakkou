import './QueryDisplay.module.css';
import {useQueryData} from "../../../hooks/useQueryData.ts";

const QueryDisplay: React.FC = () => {
    const {data} = useQueryData();

    return (
        <div>
            {data?.plainLyrics}
        </div>
    );
};

export default QueryDisplay;