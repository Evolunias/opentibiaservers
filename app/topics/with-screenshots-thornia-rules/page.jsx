import WithScreenshotsThorniaRulesKeywordPage, { generateMetadata } from './with-screenshots-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaRulesKeywordPage />;
}
