import React, { useEffect, useState } from 'react';
import './App.css';
import { client } from "./apollo/client";
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import ListWrapper from './component/ListWrapper/ListWrapper';
import AppContext from './contexts/AppContext';
import Loader from './component/Loader/Loader';

function App() {

    const LIST_CONTINENTS = gql`
    {
        continents {
            name
            countries {
                name
                languages
            }
        }
    }
    `;
    
    const {data} = useQuery(LIST_CONTINENTS, {client});
    const [isLoading, setIsLoading] = useState(true);
    const [updatedData, setUpdatedData] = useState();
    const [closeTabs, setCloseTabs] = useState(false);

    useEffect(() => {
        if(data) {
            setUpdatedData(data);
            setIsLoading(false);
        }
    }, [data]);

    useEffect(() => {
        setCloseTabs(false);
    }, [closeTabs]);

    return (
        <ApolloProvider client={client}>
            <AppContext.Provider value={{closeTabs, setCloseTabs}}>
                {console.log(data)}
                <div className="App">
                    {
                        isLoading ? 
                            <Loader />
                            : 
                            <ListWrapper 
                                data={updatedData && updatedData.continents} 
                            />
                    }
                </div>
            </AppContext.Provider>
        </ApolloProvider>
    );
}

export default App;
