import WithReviewsTibiaretroGuideKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroGuideKeywordPage />;
}
