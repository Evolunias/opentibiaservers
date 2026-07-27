import WithReviewsTibiameTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameTibiaKeywordPage />;
}
