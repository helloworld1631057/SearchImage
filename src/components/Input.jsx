import { useState } from "react";

const Input = ({ handleText , handleSearch }) => {
    const Actress = [
        "", 
        "Anushka Shetty", 
        "Kajal Agarwal", 
        "Rakul Preet Singh", 
        "Samantha Ruth Prabhu", 
        "Pooja Hegde",
        "Nayanatara",
        "Nivetha Thomas",
        "Kriti Shetty",
        "Ileana",
        "Shriya saran",
        "Anasuya Bharadwaj",
        "Apoorva aunty"
    ];
    const types = [
        "", 
        "Hot",
        "Sexy",
        "Cleavage",
        "Ass", 
        "Traditional", 
        "Bikini", 
        "Blouse",
        "Saree",
        "Face closeup", 
        "Nude"
    ];

    const safeSearch = [
        'on',
        'off'
    ];
    const [Act, setAct] = useState('');
    const [type,setType] = useState('');
    const [safe, setSafe] = useState('Moderate');
    

    const handleActressChange = (e) => {
        setAct(e.target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }
    
    const handleSearchChange = (e) => {
        // const searchSafeString = ( e.target.value === 'off' ? 'Off' : '' )/
        setSafe(e.target.value === 'off' ? 'Off' : 'Moderate'); 
    }
    const handleSubmit = () => {
        const searchString = safe;
        const text = Act + " " + type;
        handleText(text)
        handleSearch(searchString)
    }

    return(
        <div className="input-container">
            <select onChange={handleActressChange} title='Actress'>
                {
                    Actress.map((i, index) => (
                        <option key={index}>{i}</option>
                    ))
                }
            </select>
            <select onChange={handleTypeChange} title='Type'>
                {
                    types.map((i, index) => (
                        <option key={index}>{i}</option>
                    ))
                }
            </select>
            <select onChange={handleSearchChange} title='Safe Search'>
                {
                    safeSearch.map((i, index) => (
                        <option key={index}>{i}</option>
                    ))
                }
            </select>
            <button onClick={handleSubmit} type='button'>Search</button>
        </div>
    )
}

export default Input;