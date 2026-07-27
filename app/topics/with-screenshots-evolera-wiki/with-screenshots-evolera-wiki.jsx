import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-wiki');
}

export default function WithScreenshotsEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-wiki" />;
}
