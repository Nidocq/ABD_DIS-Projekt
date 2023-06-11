import { useEffect, useState } from 'react';
import { CategoryLink } from './CategoryLink';
import './Category.css';

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

export default Category;