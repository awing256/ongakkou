import './QueryContainer.module.css';
import QueryInput from "../QueryInput/QueryInput.tsx";
import QueryDisplay from "../QueryDisplay/QueryDisplay.tsx";
import QueryProvider from "../QueryContext/QueryProvider.tsx";

const QueryContainer: React.FC = () => {
    return (
        <div>
            <QueryProvider>
                <QueryInput/>
                <QueryDisplay/>
            </QueryProvider>
        </div>
    );
};

export default QueryContainer;