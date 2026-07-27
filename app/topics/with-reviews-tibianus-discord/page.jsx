import WithReviewsTibianusDiscordKeywordPage, { generateMetadata } from './with-reviews-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusDiscordKeywordPage />;
}
