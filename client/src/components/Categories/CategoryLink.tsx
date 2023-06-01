import React from "react";
import { useState } from "react";
import { CategoriesItem } from "./Category";
import './CategoryLink.css'

interface CategoryLinkProps {
    categories: any[];
    selectedCategory: CategoriesItem;
    handleOnCategoryClick: (categories: CategoriesItem) => void;
}

export function CategoryLink(props:CategoryLinkProps) {
    return (
        <>
            {
                props.categories.map((category, index) => (
                        <div
                        key={index}
                        onClick={() => props.handleOnCategoryClick(category)}
                        className={`category-link ${props.selectedCategory === category ? 'selected' : null}`}
                        >
                            {category.TextDisplay}
                        </div>
                ))
            }
        </>
    ) 

}