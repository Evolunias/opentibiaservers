import WithReviewsTibijkaOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaOpenTibiaKeywordPage />;
}
