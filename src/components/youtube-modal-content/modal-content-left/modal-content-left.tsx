import { Snippet } from '@/types/type';

interface ModalContentLeftProps {
  snippet: Snippet;
}

export default function ModalContentLeft({ snippet }: ModalContentLeftProps) {
  return (
    <div className="sm:w-3/4 p-4">
      {snippet.localized.title && (
        <h2 className="mb-2">{snippet.localized.title}</h2>
      )}
      {snippet.tags && snippet.tags.length > 0 && (
      <ul className="flex flex-wrap gap-2 text-sm">
        {snippet.tags.slice(0, 4).map((tag: string) => (
          <li>
            #
            {tag}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}
