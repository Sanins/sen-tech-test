import 'tailwindcss/tailwind.css';
import YouTubeTile from '@/components/YouTubeTile';
import { Item, YoutubeSearchListResponse } from '@/types/type';

interface HomeProps {
  videos: YoutubeSearchListResponse;
}

export default function Home({ videos }: HomeProps) {
  console.log(videos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap">
        {videos ? (
          <>
            {videos.items.map((video: Item) => (
              <YouTubeTile item={video} />
            ))}
          </>
        ) : (
          <div><p>Error</p></div>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&chart=mostPopular&part=snippet,statistics&maxResults=6`,
    );
    const videos: YoutubeSearchListResponse = await response.json();

    return {
      props: {
        videos,
      },
    };
  } catch (error) {
    return {
      props: {
        videos: null,
      },
    };
  }
}
