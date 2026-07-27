import WithReviewsXanteriaTibiaKeywordPage, { generateMetadata } from './with-reviews-xanteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaTibiaKeywordPage />;
}
