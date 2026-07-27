import WithReviewsTibiascapeDiscordKeywordPage, { generateMetadata } from './with-reviews-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeDiscordKeywordPage />;
}
