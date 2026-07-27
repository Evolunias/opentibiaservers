import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-north-america');
}

export default function WithScreenshotsWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-north-america" />;
}
