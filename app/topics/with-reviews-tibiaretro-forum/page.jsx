import WithReviewsTibiaretroForumKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroForumKeywordPage />;
}
