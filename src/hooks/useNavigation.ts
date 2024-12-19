import { useState } from 'react';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  return { currentPage, navigateTo };
};