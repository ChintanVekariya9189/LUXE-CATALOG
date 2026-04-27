import { useMemo } from 'react';
import catalogData from '../data/catalog.json';

export const useCatalog = () => {
  const categories = useMemo(() => {
    const cats = [...new Set(catalogData.map(item => item.category))];
    return cats.sort();
  }, []);

  const groupByCategory = useMemo(() => {
    return catalogData.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }, []);

  const getItemByName = (name) => {
    return catalogData.find(item => item.itemname === decodeURIComponent(name));
  };

  return { categories, groupByCategory, getItemByName, catalogData };
};
