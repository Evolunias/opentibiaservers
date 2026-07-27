import WithReviewsTibiantisWebsiteKeywordPage, { generateMetadata } from './with-reviews-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisWebsiteKeywordPage />;
}
