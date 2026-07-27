import WithReviewsTibijkaRegisterKeywordPage, { generateMetadata } from './with-reviews-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaRegisterKeywordPage />;
}
