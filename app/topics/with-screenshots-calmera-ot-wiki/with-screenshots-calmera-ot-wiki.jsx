import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot-wiki');
}

export default function WithScreenshotsCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot-wiki" />;
}
