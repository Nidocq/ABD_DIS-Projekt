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

const handleOnClick = () => {
    getItems();
}


function createItem() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/Items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getItems();
      });
  }

function CategorySuggest() {

    return (
        <div className="suggestWrapper">
            <button onClick={handleOnClick}>GET</button>
            <button onClick={() => createItem()}>CREATE</button>
            {SuggestionItems.map((item) => { return <Suggestion {...item} /> }) }  
        </div>
    )
}

export default CategorySuggest;