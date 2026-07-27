import XanteriaWithReviewsServerUsaKeywordPage, { generateMetadata } from './xanteria-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaWithReviewsServerUsaKeywordPage />;
}
