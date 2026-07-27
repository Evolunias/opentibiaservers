import WithReviewsTibiascapeTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeTibiaKeywordPage />;
}
