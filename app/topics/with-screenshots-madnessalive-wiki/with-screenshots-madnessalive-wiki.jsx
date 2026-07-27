import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-wiki');
}

export default function WithScreenshotsMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-wiki" />;
}
