import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-wiki');
}

export default function WithScreenshotsTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-wiki" />;
}
