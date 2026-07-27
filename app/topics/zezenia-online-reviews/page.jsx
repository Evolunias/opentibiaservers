import ZezeniaOnlineReviewsKeywordPage, { generateMetadata } from './zezenia-online-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineReviewsKeywordPage />;
}
