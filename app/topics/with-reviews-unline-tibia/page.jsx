import WithReviewsUnlineTibiaKeywordPage, { generateMetadata } from './with-reviews-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineTibiaKeywordPage />;
}
