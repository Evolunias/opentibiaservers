import YurotsWithReviewsServerFranceKeywordPage, { generateMetadata } from './yurots-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithReviewsServerFranceKeywordPage />;
}
