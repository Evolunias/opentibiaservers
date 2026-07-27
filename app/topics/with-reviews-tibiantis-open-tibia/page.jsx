import WithReviewsTibiantisOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisOpenTibiaKeywordPage />;
}
