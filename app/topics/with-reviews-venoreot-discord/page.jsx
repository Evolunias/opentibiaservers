import WithReviewsVenoreotDiscordKeywordPage, { generateMetadata } from './with-reviews-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotDiscordKeywordPage />;
}
