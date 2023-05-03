import { Item } from '@/types/type';
import { useState } from 'react';
import Image from 'next/image';
import Modal from '../modal/modal';

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
    <div className="w-1/3 p-2 min-w-[360px]">
      <Image
        src={snippet.thumbnails.high.url}
        alt={snippet.localized.description}
        className="cursor-pointer"
        width="480"
        height="360"
        onClick={handleOpenModal}
      />
      <div>
        <h2>{snippet.localized.title}</h2>
      </div>
      <Modal modalType="youtube" item={item} open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
