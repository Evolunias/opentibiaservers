import WithReviewsTibiantisForumKeywordPage, { generateMetadata } from './with-reviews-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisForumKeywordPage />;
}
