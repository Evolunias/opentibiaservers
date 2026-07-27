import WithReviewsTibiaretroKeywordPage, { generateMetadata } from './with-reviews-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroKeywordPage />;
}
