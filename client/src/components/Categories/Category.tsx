import { useEffect, useState } from 'react';
import { CategoryLink } from './CategoryLink';
import { Button, ColorMode, Menu, MenuButton, MenuDivider, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, color, useColorMode } from '@chakra-ui/react';
import './Category.css';
import { colorTheme } from '../toggleColorMode';
import { ChevronDownIcon } from '@chakra-ui/icons';


const getCategorySuggestions = async (text: string): Promise<void> => {
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
    body: JSON.stringify({ name, email }),
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


export interface CategoriesItem {
  TextDisplay: string;
  // this is the strings you want to append to the selected link div element,
  // when it is pressed, segregating the css components it has.
  propertyFlags: string[];
}

interface CategoryProps {
  categories: CategoriesItem[];
  onCategoryClick: (category: CategoriesItem) => void;
}

function Category() {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesItem>({ TextDisplay: "All", propertyFlags: [] });
  const [categories, setCategories] = useState<CategoriesItem[]>([]);
  useEffect(() => {
    setCategories([
      {
        TextDisplay: "All",
        propertyFlags: ["selected"]
      },
      {
        TextDisplay: "Art",
        propertyFlags: ["selected"]
      },
      {
        TextDisplay: "Photography",
        propertyFlags: ["selected"]
      },
      {
        TextDisplay: "Music",
        propertyFlags: ["selected"]
      },
      {
        TextDisplay: "Sport",
        propertyFlags: ["selected"]
      }
    ])
  }, [])

  const handleOnCategoryClick = (category: CategoriesItem) => {
    setSelectedCategory(category)
  }

  return (
    <div className="category-container" >
      <CategoryLink
        categories={categories}
        handleOnCategoryClick={(category) => handleOnCategoryClick(category)}
        selectedCategory={selectedCategory}
      />
    </div>
  )
}


export const DropdownCategories = () => {

  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        borderWidth='1px'
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        File <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuDivider />
        <MenuItem>Open...</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Category;