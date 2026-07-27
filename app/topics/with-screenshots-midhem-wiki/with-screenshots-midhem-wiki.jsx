import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-wiki');
}

export default function WithScreenshotsMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-wiki" />;
}
