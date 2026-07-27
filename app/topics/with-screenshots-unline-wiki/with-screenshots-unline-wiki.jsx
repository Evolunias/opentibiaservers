import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-wiki');
}

export default function WithScreenshotsUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-wiki" />;
}
