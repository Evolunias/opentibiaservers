import WithReviewsTibiaretroOtsKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroOtsKeywordPage />;
}
