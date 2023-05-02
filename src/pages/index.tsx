export default function Home({ videos }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap">
        {videos.map((video) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-1/3 h-16 bg-red-500">
            <h2>{video.snippet.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&maxResults=6`,
  );
  const data = await response.json();
  const videos = data.items.map((item: any) => ({
    id: item.id.videoId,
    snippet: item.snippet,
  }));

  return {
    props: {
      videos,
    },
  };
}
