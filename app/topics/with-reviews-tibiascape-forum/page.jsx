import WithReviewsTibiascapeForumKeywordPage, { generateMetadata } from './with-reviews-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeForumKeywordPage />;
}
