import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-ot');
}

export default function WithScreenshotsTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-ot" />;
}
