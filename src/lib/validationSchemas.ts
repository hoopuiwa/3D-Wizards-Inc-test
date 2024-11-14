import * as Yup from 'yup';

// Define enums manually
export enum Option {
  CrystalDragon = 'Crystal Dragon',
  WingedCrystalDragon = 'Winged Crystal Dragon',
  MechanicalDragon = 'Mechanical Dragon',
  ImperialDragon = 'Imperial Dragon',
  BabyDragon = 'Baby Dragon',
  Frog = 'Frog',
  Axolotl = 'Axolotl',
  Gecko = 'Gecko',
  Rat = 'Rat',
  Ferret = 'Ferret',
  Knight = 'Knight',
  Samurai = 'Samurai',
}

export enum Size {
  x0_5 = 'x0.5',
  x1 = 'x1',
  x2 = 'x2',
  x3 = 'x3',
}

export enum Color {
  red = 'red',
  pink = 'pink',
  orange = 'orange',
  yellow = 'yellow',
  green = 'green',
  blue = 'blue',
  purple = 'purple',
  brown = 'brown',
  black = 'black',
  gray = 'gray',
  white = 'white',
}

// Generate keys for Yup validation
export const optionKeys = Object.values(Option);
export const sizeKeys = Object.values(Size);
export const colorKeys = Object.values(Color);

// Define validation schemas
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

// Interface for product form
export interface ICreateProductForm {
  id?: number;
  option: Option;
  size: Size;
  color: Color[];
  quantity: number;
  owner: string;
}

export const CreateProductSchema = Yup.object().shape({
  option: Yup.mixed<Option>().oneOf(Object.values(Option)).required('Option is required'),
  size: Yup.mixed<Size>().oneOf(Object.values(Size)).required('Size is required'),
  color: Yup.array()
    .of(Yup.mixed<Color>().oneOf(Object.values(Color)))
    .min(1, 'At least one color must be selected')
    .required('Color is required'),
  quantity: Yup.number().integer().positive().required('Quantity is required'),
  owner: Yup.string().required('Owner is required'),
});
