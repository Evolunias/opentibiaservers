import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-sweden');
}

export default function WithScreenshotsWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-sweden" />;
}
