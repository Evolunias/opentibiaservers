import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-usa');
}

export default function WithScreenshotsWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-usa" />;
}
