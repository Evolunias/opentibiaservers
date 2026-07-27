import WithReviewsTibiaretroTibiaKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroTibiaKeywordPage />;
}
