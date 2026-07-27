import WithReviewsUnlineDiscordKeywordPage, { generateMetadata } from './with-reviews-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineDiscordKeywordPage />;
}
