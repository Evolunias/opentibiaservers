import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-baiak-ilusion-wiki');
}

export default function WithScreenshotsBaiakIlusionWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-baiak-ilusion-wiki" />;
}
