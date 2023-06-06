import { useEffect, useState } from 'react';
import { CategoryLink } from './CategoryLink';
import './Category.css';

const getCategorySuggestions = async (text: string) : Promise<void> => {
}

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
        return response.text();
      })
      .then(data => {
        alert(data);
        //getItems();
      });
  }

const handleGetOnClick = () => {
    getItems();
}

const handlePostOnClick = () => {
    createItem();
}


export interface CategoriesItem  {
    TextDisplay: string;
}

interface CategoryProps {
    categories: CategoriesItem[];
    onCategoryClick: (category: CategoriesItem) => void;
}

function Category() {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesItem>({ TextDisplay: "All" });
  const [categories, setCategories] = useState<CategoriesItem[]>([]);
  useEffect(() => { 
    setCategories([ 
     { TextDisplay: "All" }, 
    { TextDisplay: "Art" },
     { TextDisplay: "Photography" },
     { TextDisplay: "Music" }, 
    { TextDisplay: "Sport" } ])
 },[])

  const handleOnCategoryClick = (category: CategoriesItem) => {
    setSelectedCategory(category)
  }

    return (
         <div className="category-container">
            <CategoryLink 
                categories={categories}
                handleOnCategoryClick={(category) => handleOnCategoryClick(category)}
                selectedCategory={selectedCategory}
            />
        </div> 
    )
}

export default Category;