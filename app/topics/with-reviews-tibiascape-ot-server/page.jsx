import WithReviewsTibiascapeOtServerKeywordPage, { generateMetadata } from './with-reviews-tibiascape-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeOtServerKeywordPage />;
}
