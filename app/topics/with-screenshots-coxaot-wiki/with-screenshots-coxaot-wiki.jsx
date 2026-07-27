import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-wiki');
}

export default function WithScreenshotsCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-wiki" />;
}
