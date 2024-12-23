import { TweetCard } from './tweet-card';

const TWEETS = [
  { id: '1775569730004218172' },
  { id: '1737862303561957868' },
  { id: '1839281556700934481' },
  { id: '1868735179973619782' },
  { id: '1852806114817282363' },
  { id: '1868249302914543978' }
];

export function TweetFeed() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 [&>*]:h-fit">
        {TWEETS.map(({ id }) => (
          <TweetCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}