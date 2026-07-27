import WithReviewsXanteriaOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaOpenTibiaKeywordPage />;
}
