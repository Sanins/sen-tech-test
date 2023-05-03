import { Statistics } from '@/types/type';

interface ModalContentRightProps {
  statistics: Statistics;
}

export default function ModalContentLeft({ statistics }: ModalContentRightProps) {
  return (
    <div className="sm:w-1/4 p-4">
      <h3 className="mb-2">
        Views:
        {' '}
        {statistics.viewCount ? statistics.viewCount : 0}
      </h3>
      <h3>
        Likes:
        {' '}
        {statistics.likeCount ? statistics.likeCount : 0}
      </h3>
    </div>
  );
}
