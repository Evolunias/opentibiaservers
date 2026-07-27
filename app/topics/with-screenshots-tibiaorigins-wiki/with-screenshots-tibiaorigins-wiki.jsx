import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-wiki');
}

export default function WithScreenshotsTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-wiki" />;
}
