import WithReviewsTibiaoriginsServerKeywordPage, { generateMetadata } from './with-reviews-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaoriginsServerKeywordPage />;
}
