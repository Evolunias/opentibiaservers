import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-south-america');
}

export default function WithScreenshotsWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-south-america" />;
}
