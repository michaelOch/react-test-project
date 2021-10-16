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
                languages {
                    name
                }
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
                <div className="App">
                    {
                        isLoading ? 
                            <Loader />
                            : 
                            (
                                <div>
                                    <h3>CONTINENTS</h3>
                                    <ListWrapper 
                                        data={updatedData && updatedData.continents} 
                                    />
                                </div>
                            )
                    }
                </div>
            </AppContext.Provider>
        </ApolloProvider>
    );
}

export default App;
