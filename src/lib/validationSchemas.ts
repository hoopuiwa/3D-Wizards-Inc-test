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

const CreateProductSchema = Yup.object().shape({
  option: Yup.mixed<Option>().required('Option is required'),
  size: Yup.mixed<Size>().required('Size is required'),
  color: Yup.array().of(Yup.mixed<Color>().required()).required('At least one color is required'),
  quantity: Yup.number().required('Quantity is required').positive('Quantity must be a positive number'),
  owner: Yup.string().required('Owner is required'),
});

export { CreateProductSchema };
