import { useState } from "react";

const Input = ({ handleText , handleSearch }) => {
    const Actress = [
        "", 
        "Anushka Shetty", 
        "Kajal Agarwal", 
        "Rakul Preet Singh", 
        "Rashmika Mandanna",
        "Tamannah Bhatia",
        "Shruti Hassan",
        "Sai Pallavi",
        "Keerthy Suresh",
        "Anu Emmanuel",
        "Rashi Khanna",
        "Samantha Ruth Prabhu", 
        "Pooja Hegde",
        "Trisha Krishnan",
        "Anjali",
        "Nithya Menen",
        "Nayanatara",
        "Nivetha Thomas",
        "Kriti Shetty",
        "Regina Cassandra",
        "Ileana",
        "Nidhhi Agarwal",
        "Charmy Kaur",
        "Eesha Rebba",
        "Amala paul",
        "Payal Rajput",
        "Shriya saran",
        "Hebha Patel",
        "Tapsee Pannu",
        "Meena",
        "Roja Selvamani",
        "Shamna Kasim",
        "Anasuya Bharadwaj",
        "Sreemukhi",
        "Rashmi Gautami",
        "Vishnu Priya",
        "Deepika Pilli",
        "Varshini soundarajan",
        "Apoorva aunty",
        "Pavitra Lokesh",
        "Pragathi mahavadi",
        "Satya Krishnan",
        "Surekha Vani",
        "Mamilla Shailaja Priya",

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
        "Navel",
        "Thighs",
        "Face closeup", 
        "Nude",
        "Fap",
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