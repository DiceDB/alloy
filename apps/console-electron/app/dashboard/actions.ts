'use server';

import { revalidatePath } from 'next/cache';

let counter = 0;

export async function incrementCounter() {
  counter++;
  revalidatePath('/dashboard');
}

export async function getCounter() {
  return counter;
}
