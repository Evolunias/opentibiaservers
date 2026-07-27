import WithScreenshotsNtoStarRulesKeywordPage, { generateMetadata } from './with-screenshots-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarRulesKeywordPage />;
}
