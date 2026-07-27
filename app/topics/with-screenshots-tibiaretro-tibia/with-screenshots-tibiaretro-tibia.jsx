import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-tibia');
}

export default function WithScreenshotsTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-tibia" />;
}
