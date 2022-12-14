import React,{useEffect,useState}from 'react'
import { useDebounce } from 'use-debounce'

import { useResultContext } from '../context/ResultContextProvider'
import { Links } from './Links'
export const Search = () => {

  const [text,setText] = useState('Elon Musk');
  const {setSearchTerm} = useResultContext();
  const [debouncedValue] = useDebounce(text,300);
  useEffect(()=> {
    if(debouncedValue) setSearchTerm(debouncedValue)
  },[debouncedValue])
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>

      <input placeholder="Search Google or type url" 
      onChange={(e) => setText(e.target.value)} 
      value={text} type="text" 
      className='sm:w-96 w-80 h-10 dark:bg-ggray-200 border rounded-full shadow-sm outline-none p-6 text-balck hover:shadow-lg'
      />
      {!text && (<button type="button" className='absoulte top-1.5 right-4 text-2xl text-gray-500'
      onClick={()=>setText('')}>X</button>)}
      <Links/>
    </div>
  )
}
