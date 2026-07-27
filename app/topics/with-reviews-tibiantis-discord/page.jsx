import WithReviewsTibiantisDiscordKeywordPage, { generateMetadata } from './with-reviews-tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisDiscordKeywordPage />;
}
