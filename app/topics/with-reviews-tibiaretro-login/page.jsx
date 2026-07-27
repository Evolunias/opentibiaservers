import WithReviewsTibiaretroLoginKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroLoginKeywordPage />;
}
