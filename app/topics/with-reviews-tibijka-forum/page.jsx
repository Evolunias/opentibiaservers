import WithReviewsTibijkaForumKeywordPage, { generateMetadata } from './with-reviews-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaForumKeywordPage />;
}
