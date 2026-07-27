import WithReviewsXanteriaWebsiteKeywordPage, { generateMetadata } from './with-reviews-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaWebsiteKeywordPage />;
}
