import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-wiki');
}

export default function WithScreenshotsOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-wiki" />;
}
