import WithReviewsTibiaraTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraTibiaKeywordPage />;
}
