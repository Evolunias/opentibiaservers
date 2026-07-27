import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-argentina');
}

export default function WithScreenshotsWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-argentina" />;
}
