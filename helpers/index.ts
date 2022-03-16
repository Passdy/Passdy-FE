// eslint-disable-next-line import/prefer-default-export
export const validatePassword = (value: string): [boolean, boolean, boolean] => {
  const isInvalidLength = /^.{6,}$/.test(value);
  const isNoSpecialChar = /=.*[!@#$%^&*]/.test(value);
  const isNoNumber = /=.*[0-9]/.test(value);

  return [isInvalidLength, isNoSpecialChar, isNoNumber];
};

export type SelectOptionType = {
  value: string | number;
  label: string;
};
