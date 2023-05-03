import { Item } from '@/types/type';
import { useState } from 'react';
import Example from './Modal';

interface YoutubeTileProps {
  item: Item;
}

export default function YoutubeTile({ item }: YoutubeTileProps) {
  const { snippet } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-1/3 h-16 bg-red-500">
      <button onClick={handleOpenModal}>Click me</button>
      <h2>{snippet.title}</h2>
      <Example item={item} open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
