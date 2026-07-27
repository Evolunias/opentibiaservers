import WithReviewsTibiaretroDiscordKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroDiscordKeywordPage />;
}
