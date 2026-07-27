import WithReviewsTibianusForumKeywordPage, { generateMetadata } from './with-reviews-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusForumKeywordPage />;
}
