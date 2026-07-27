import WithReviewsZezeniaOnlineWikiKeywordPage, { generateMetadata } from './with-reviews-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsZezeniaOnlineWikiKeywordPage />;
}
