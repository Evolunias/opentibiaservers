import WithReviewsTibijkaServerKeywordPage, { generateMetadata } from './with-reviews-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaServerKeywordPage />;
}
