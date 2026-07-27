import WithReviewsTibijkaLoginKeywordPage, { generateMetadata } from './with-reviews-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaLoginKeywordPage />;
}
