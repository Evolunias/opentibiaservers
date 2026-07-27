import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-wiki');
}

export default function WithScreenshotsBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-wiki" />;
}
