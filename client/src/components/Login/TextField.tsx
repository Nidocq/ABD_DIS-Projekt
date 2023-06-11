import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Select, Textarea } from '@chakra-ui/react'
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
import { AccountContext } from "../AccountContext";
import { useContext } from "react";

export const TextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel>{label}</FormLabel>
      <Input as={Field}  {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export const MultiTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel>{label}</FormLabel>
      <Textarea {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}


export const DropdownCategories = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  let categories = [
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
  ]
return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel>{label}</FormLabel>
      <Select {...field} {...props}>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category.TextDisplay}>{category.TextDisplay}</option>
          );
          })
        }
      </Select>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );

}