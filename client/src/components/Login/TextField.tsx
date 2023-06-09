import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Textarea } from '@chakra-ui/react'
import { Input  } from "@chakra-ui/input";
import { Field, useField  } from "formik";

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

