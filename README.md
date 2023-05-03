This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
You'll need to get your own api key from the youtube api docs https://developers.google.com/youtube/v3/docs/videos/list and create a .env.local file in the root directory with the below.

```
{
    NEXT_PUBLIC_YOUTUBE_API_KEY=12345
}
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## introduction
I developed this application using Next.js to utilize its server-side rendering feature for fetching YouTube API data. Instead of using CSS preprocessors like SASS or LESS, I opted to use Tailwind CSS since I hadn't used it before, and it was an opportunity to learn a new library while completing a tech test. I added one unit test to demonstrate my testing skills, but I intend to unit test the entire application. I designed each component to be reusable and easily testable.
## Next Steps
In the future, I would like to improve error handling when fetching data, providing users with more detailed feedback. Additionally, I would implement some form of logging to gain insight into any frontend errors. I also would not use a model, as models are not very accessible. Ideally, I would create a new page to allow users to bookmark their favorite videos' URLs. The reason I created a model in this instance is that the wireframe did not display a new URL, so I assumed it must be a model. If I encountered this issue in a work environment, I would ask for clarification.