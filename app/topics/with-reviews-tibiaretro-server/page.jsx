import WithReviewsTibiaretroServerKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroServerKeywordPage />;
}
