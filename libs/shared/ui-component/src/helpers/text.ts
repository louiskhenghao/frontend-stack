import trim from 'lodash/trim';
import isArray from 'lodash/isArray';
import includes from 'lodash/includes';
import intersection from 'lodash/intersection';

type AddressComponentItem = {
  long_name: string;
  short_name: string;
  types: string[];
};

export const extractAddressComponents = (
  components: AddressComponentItem[],
  type: string | string[],
  key: 'long_name' | 'short_name' = 'long_name'
) => {
  const targetKey = includes(['short_name', 'long_name'], key);
  if (!targetKey) return null;
  return (
    components
      .filter((component) => {
        if (isArray(type)) {
          return intersection(component.types, type).length > 0;
        }
        return component.types.indexOf(type) === 0;
      })
      .map((item) => item[key])
      .pop() || null
  );
};

// check whether comma exists at the end of the string
export const isCommaAtEnd = (text = '') => {
  const trimText = trim(text);
  return trimText.slice(-1) === ',';
};

// construct string whether to add comma at the end of the string
export const addCommaToEndOfString = (text?: string, comma = true) => {
  if (!text) return '';
  const trimText = trim(text);
  const hasComma = isCommaAtEnd(trimText);
  return `${trimText}${comma && !hasComma ? ',' : ''}`;
};

export const truncateString = (text?: string, num = 150) => {
  if (!text) return '';
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (text.length <= num) {
    return text;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return `${text.slice(0, num)}...`;
};

export const formatAddress = (data: any) => {
  const addressOne = addCommaToEndOfString(data.addressOne);
  const addressTwo = addCommaToEndOfString(data.addressTwo);
  const postalCode = addCommaToEndOfString(data.postalCode, false);
  const city = addCommaToEndOfString(data.city);
  const state = addCommaToEndOfString(data.state);
  const country = addCommaToEndOfString(data.country, false);

  return {
    formatted: `${addressOne} ${addressTwo} ${postalCode} ${city} ${state} ${country}`,
    address: {
      addressOne,
      addressTwo,
      postalCode,
      city,
      state,
      country,
    },
  };
};

export const makeRandomString = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default {
  isCommaAtEnd,
  addCommaToEndOfString,
  truncateString,
  formatAddress,
  makeRandomString,
};
