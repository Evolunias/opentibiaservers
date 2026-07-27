import WithReviewsTibiaretroOtKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroOtKeywordPage />;
}
