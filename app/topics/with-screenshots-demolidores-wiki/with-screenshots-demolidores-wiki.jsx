import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-wiki');
}

export default function WithScreenshotsDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-wiki" />;
}
