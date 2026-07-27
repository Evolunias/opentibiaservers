import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-wiki');
}

export default function WithScreenshotsTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-wiki" />;
}
