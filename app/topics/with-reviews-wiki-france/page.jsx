import WithReviewsWikiFranceKeywordPage, { generateMetadata } from './with-reviews-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsWikiFranceKeywordPage />;
}
