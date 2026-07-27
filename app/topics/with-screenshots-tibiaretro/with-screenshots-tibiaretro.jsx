import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro');
}

export default function WithScreenshotsTibiaretroKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro" />;
}
