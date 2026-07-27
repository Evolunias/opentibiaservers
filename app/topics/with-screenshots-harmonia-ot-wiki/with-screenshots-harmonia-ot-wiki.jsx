import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-wiki');
}

export default function WithScreenshotsHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-wiki" />;
}
