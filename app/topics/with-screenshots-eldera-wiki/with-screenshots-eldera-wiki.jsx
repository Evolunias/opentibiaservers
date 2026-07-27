import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-wiki');
}

export default function WithScreenshotsElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-wiki" />;
}
