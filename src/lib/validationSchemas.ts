import * as Yup from 'yup';
import { Option, Size, Color } from '@prisma/client';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

// Define the TypeScript interface for the form data
export interface ICreateProductForm {
  id?: number;
  option: Option;
  size: Size;
  color: Color[];
  quantity: number;
  owner: string;
}

export const CreateProductSchema = Yup.object({
  option: Yup.mixed<Option>().oneOf(Object.values(Option)).required('Option is required'),
  size: Yup.mixed<Size>().oneOf(Object.values(Size)).required('Size is required'),
  color: Yup.array()
    .of(Yup.mixed<Color>().oneOf(Object.values(Color)))
    .required('Color is required'),
  quantity: Yup.number().required('Quantity is required').positive().integer(),
  owner: Yup.string().required('Owner is required'),
});
