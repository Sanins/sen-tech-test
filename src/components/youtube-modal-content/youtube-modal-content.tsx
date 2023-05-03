import { Item } from '@/types/type';
import ModalContentLeft from './modal-content-left/modal-content-left';
import ModalContentRight from './modal-content-right/modal-content-right';

interface YoutubeModalContentProps {
  item: Item;
}

export default function YoutubeModalContent({ item }: YoutubeModalContentProps) {
  const { snippet, id, statistics } = item;

  return (
    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div>
        <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
          <div>
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${id}`}
              title={snippet.title}
              allowFullScreen
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <ModalContentLeft snippet={snippet} />
            <ModalContentRight statistics={statistics} />
          </div>
        </div>
      </div>
    </div>
  );
}
