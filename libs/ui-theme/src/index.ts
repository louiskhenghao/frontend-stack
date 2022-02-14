// lib/tailwind.js
import { create, TailwindFn } from 'twrnc';
import { ClassInput } from 'twrnc/dist/esm/types';

// create the customized version...
const tailwind = create(require(`../tailwind.config.js`));

export const tw = tailwind.style;

export const getColor = tailwind.color;

// ... and then this becomes the main function your app uses
export default tailwind;
