import WithReviewsTibiaoriginsKeywordPage, { generateMetadata } from './with-reviews-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaoriginsKeywordPage />;
}
