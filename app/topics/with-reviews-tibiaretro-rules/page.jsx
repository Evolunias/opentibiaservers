import WithReviewsTibiaretroRulesKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroRulesKeywordPage />;
}
