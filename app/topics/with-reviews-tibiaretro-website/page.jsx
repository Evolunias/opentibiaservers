import WithReviewsTibiaretroWebsiteKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroWebsiteKeywordPage />;
}
