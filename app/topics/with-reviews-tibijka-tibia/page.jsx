import WithReviewsTibijkaTibiaKeywordPage, { generateMetadata } from './with-reviews-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaTibiaKeywordPage />;
}
