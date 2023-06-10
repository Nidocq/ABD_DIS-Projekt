import React from "react";
import { useState } from "react";
import { CategoriesItem } from "./Category";
import { colorTheme } from '../toggleColorMode';
import { useColorMode, ColorMode } from "@chakra-ui/color-mode";
import './CategoryLink.css'

interface CategoryLinkProps {
    categories: CategoriesItem[];
    selectedCategory: CategoriesItem;
    handleOnCategoryClick: (categories: CategoriesItem) => void;
}

export function CategoryLink( props : CategoryLinkProps ) {
    const { colorMode, toggleColorMode } = useColorMode();       
    // spaces prevents the strings from being attached when being processed
    var darkString : string = colorMode == colorTheme.dark ? colorTheme.dark + " " : "";
    var classNameProperty = "category-link ".concat(darkString);

    return (
        <>
            {
                props.categories.map((category, index) => (
                        <div
                        key={index}
                        onClick={() => props.handleOnCategoryClick(category)}
                        // 
                        className={
                            // if the item is selected. all the string flags from
                            // propertyflags will be appended onto classNameProperty
                            // Otherwise just default css property name
                            props.selectedCategory === category 
                            ? classNameProperty.concat(
                                props.selectedCategory.propertyFlags.join(' ')
                              ) 
                            : classNameProperty
                        }
                        >
                            {category.TextDisplay}
                        </div>
                ))
            }
        </>
    ) 

}