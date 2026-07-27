import WithReviewsTibianusOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusOpenTibiaKeywordPage />;
}
