'use client';

import { CATEGORIES } from '@/lib/utils/constants';
import { Project } from '@/lib/types/sanity/sanity.types';
import { useEffect, useRef, useState } from 'react';

interface UseProjectFilterParams {
  projects: Project[];
  active: string;
  handleFilterChange: (category: string) => void;
}

export function useProjectFilter({
  projects,
  active,
  handleFilterChange,
}: UseProjectFilterParams) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    CATEGORIES.find(category => category.value === active) ?? CATEGORIES[0];

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const getCategorySize = (value: string) =>
    value === 'all'
      ? projects.length
      : projects.filter(project => project.category?.includes(value)).length;

  const toggleMenu = () => setIsOpen(open => !open);

  const onSelect = (value: string) => {
    handleFilterChange(value);
    setIsOpen(false);
  };

  return {
    isOpen,
    menuRef,
    activeCategory,
    getCategorySize,
    toggleMenu,
    onSelect,
  };
}
