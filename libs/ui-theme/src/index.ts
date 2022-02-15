// lib/tailwind.js
import { create } from 'twrnc';

// create the customized version...
const tailwind = create(require(`../tailwind.config.js`));

export const tw = tailwind.style;

export const getColor = tailwind.color;

// ... and then this becomes the main function your app uses
export default tailwind;
