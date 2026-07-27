import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-wiki');
}

export default function WithScreenshotsInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-wiki" />;
}
