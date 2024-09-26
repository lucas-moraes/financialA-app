type TCategoryList = [
  {
    value: number;
    label: string;
  },
];

export async function CategoriesTranslator(category: string, categoriesList: TCategoryList): Promise<number> {
  const categoryNumber = await new Promise<number>(resolve => {
    categoriesList?.map((item: { value: number; label: string }) => {
      if (item.label === category) {
        resolve(Number(item?.value));
      }
    });
  });

  return categoryNumber;
}
