import WithReviewsTibiantisServerKeywordPage, { generateMetadata } from './with-reviews-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisServerKeywordPage />;
}
