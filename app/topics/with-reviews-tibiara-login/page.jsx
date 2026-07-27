import WithReviewsTibiaraLoginKeywordPage, { generateMetadata } from './with-reviews-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraLoginKeywordPage />;
}
