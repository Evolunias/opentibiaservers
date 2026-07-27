import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-wiki');
}

export default function WithScreenshotsLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-wiki" />;
}
