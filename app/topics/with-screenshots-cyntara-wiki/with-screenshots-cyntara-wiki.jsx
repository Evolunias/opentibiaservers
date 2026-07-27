import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-wiki');
}

export default function WithScreenshotsCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-wiki" />;
}
