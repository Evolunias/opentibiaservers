import WithReviewsXanteriaLoginKeywordPage, { generateMetadata } from './with-reviews-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaLoginKeywordPage />;
}
