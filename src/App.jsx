
import { useState } from 'react'
import './App.css'
import Displaycontainer from './components/Displaycontainer'
import Input from './components/Input'
import axios from 'axios'
import { useEffect } from 'react'

function App() {

  const [text, setText] = useState('');
  const [dataset, setDataset] = useState([]);
  const [search, setSearch] = useState('Strict');




  const options = {
    method: 'GET',
    url: 'https://bing-image-search1.p.rapidapi.com/images/search',
    params: {q: text, count: '100', safeSearch: search, mkt: 'es-US'},
    headers: {
      'X-RapidAPI-Key': 'e6f4d743acmsh2897a40298c7821p1580dejsnda057282ccdb',
      'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios.request(options).then(function (response) {
      setDataset(response.data.value)
      console.log(dataset);
    }).catch(function (error) {
      console.error(error);
    });
  },[options.params.q, options.params.safeSearch])

  const handleText = (textId) => {
    setText(textId)
  }

  const handleSearch = (searchString) => {
    setSearch(searchString)
    // if(searchString=== 'Off'){
    //   setMk('es-US')
    // }else{
    //   setMk('es-IN');
    // }
  }

  return (
    <div className="App">
      <Input handleText={handleText} handleSearch = { handleSearch }/>
      <Displaycontainer dataset={dataset}/>
    </div>
  )
}

export default App
