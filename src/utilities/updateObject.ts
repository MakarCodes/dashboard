interface IObject {
  [key: string]: any;
}

export const updateObject = <T>(oldObject: T, updatedProperties: IObject) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
