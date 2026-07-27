import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-germany');
}

export default function WithScreenshotsWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-germany" />;
}
