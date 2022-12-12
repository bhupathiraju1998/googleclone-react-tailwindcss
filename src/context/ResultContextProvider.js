import React,{createContext,useContext,useState} from 'react';

const ResultContext = createContext();

const baseUrl = 'https://google-search72.p.rapidapi.com'

export const ResultContextProvider  = ({children} ) => {
    const[results,setResults] = useState([]);
    const [loading,setLoading] = useState(false);
    const [searchTerm,setSearchTerm] =useState('');

    const getResults = async(type) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}/${type}`,{
            method:'GET',
            headers:{
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        });
        const data = await response.json();
        if(type === '/news'){
            setResults( data.entries)
        }else if(type.includes('./images')){
            setResults(data.image_results)
        }else{
            setResults(data.results)
        }
        console.log("data",data)
     
        setLoading(false)
    }

    return (<ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,loading}}>
                {children}
            </ResultContext.Provider>)
}

export const useResultContext = () => useContext(ResultContext);