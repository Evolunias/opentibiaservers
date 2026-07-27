import WithReviewsTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeOpenTibiaKeywordPage />;
}
