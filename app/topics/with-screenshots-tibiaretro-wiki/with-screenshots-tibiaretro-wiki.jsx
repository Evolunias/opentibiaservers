import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-wiki');
}

export default function WithScreenshotsTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-wiki" />;
}
