'use server';

import { Stuff, Condition, Option, Size, Color } from '@prisma/client';
import { ICreateProductForm } from '@/lib/validationSchemas';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new item to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, condition.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; condition: string }) {
  let condition: Condition;

  switch (stuff.condition) {
    case 'excellent':
      condition = 'excellent';
      break;
    case 'poor':
      condition = 'poor';
      break;
    default:
      condition = 'fair';
  }

  await prisma.stuff.create({
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition,
    },
  });
  redirect('/list');
}

/**
 * Edits an existing item in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
export async function editStuff(stuff: Stuff) {
  await prisma.stuff.update({
    where: { id: stuff.id },
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition: stuff.condition,
    },
  });
  redirect('/list');
}

/**
 * Deletes an existing item from the database.
 * @param id, the id of the item to delete.
 */
export async function deleteStuff(id: number) {
  await prisma.stuff.delete({
    where: { id },
  });
  redirect('/list');
}

/**
 * Adds or updates a product in the database.
 * @param productData, the product form data of type ICreateProductForm.
 */
export const upsertProduct = async (productData: ICreateProductForm) => {
  const data = {
    option: productData.option as Option,
    size: productData.size as Size,
    color: { set: productData.color as Color[] },
    quantity: productData.quantity,
    owner: productData.owner,
  };

  let product;
  if (productData.id) {
    product = await prisma.product.update({
      where: { id: productData.id },
      data,
    });
  } else {
    product = await prisma.product.create({
      data,
    });
  }

  return product;
};

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
