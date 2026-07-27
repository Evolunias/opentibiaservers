import ZezeniaOnlineReviewKeywordPage, { generateMetadata } from './zezenia-online-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineReviewKeywordPage />;
}
