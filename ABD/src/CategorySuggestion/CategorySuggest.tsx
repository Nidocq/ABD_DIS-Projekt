import './CategorySuggest.css';
import { CategoryItem } from './Suggestion';
import { Suggestion } from './Suggestion';
const getCategorySuggestions = async (text: string) : Promise<void> => {
}

const SuggestionItems : CategoryItem[]= [
    {
        TextDisplay: "All"
    },
    {
        TextDisplay: "Art"
    },
    {
        TextDisplay: "Photography"
    },
    {
        TextDisplay: "Music"
    },
    {
        TextDisplay: "Sport"
    }
]

const getItems = () => {
    fetch('http://localhost:3001')
    .then(response => response.json())
    .then(data => console.log(data));
} 

function createItem() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        // console.log("I am response text " + response.text());
        return response.text();
      })
      .then(data => {
        alert(data);
        // getItems();
      });
  }

const handleGetOnClick = () => {
    getItems();
}

const handlePostOnClick = () => {
    createItem();
}



function CategorySuggest() {
    return (
        <div className="suggestWrapper">
            <button onClick={handleGetOnClick}>GET</button>
            <button onClick={handlePostOnClick}>CREATE</button>
            {SuggestionItems.map((item,index) => { return <Suggestion key={index} {...item} /> }) }  
        </div>
    )
}

export default CategorySuggest;