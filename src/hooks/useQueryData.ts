import {useContext} from "react";
import {QueryContext} from "../components/Querying/QueryContext/QueryContext.tsx";

export const useQueryData = () => {
    const context = useContext(QueryContext);
    if (!context) {
        throw new Error('useContext must be used within a ContextProvider');
    }
    return context
};