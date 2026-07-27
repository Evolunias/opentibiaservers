import WithReviewsTibiaraForumKeywordPage, { generateMetadata } from './with-reviews-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraForumKeywordPage />;
}
