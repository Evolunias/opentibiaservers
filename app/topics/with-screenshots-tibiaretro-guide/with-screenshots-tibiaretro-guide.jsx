import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-guide');
}

export default function WithScreenshotsTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-guide" />;
}
