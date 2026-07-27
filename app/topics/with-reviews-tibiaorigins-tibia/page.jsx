import WithReviewsTibiaoriginsTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaoriginsTibiaKeywordPage />;
}
