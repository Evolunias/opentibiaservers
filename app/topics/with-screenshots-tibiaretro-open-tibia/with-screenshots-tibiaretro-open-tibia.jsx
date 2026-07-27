import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-open-tibia');
}

export default function WithScreenshotsTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-open-tibia" />;
}
