import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-ots');
}

export default function WithScreenshotsTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-ots" />;
}
