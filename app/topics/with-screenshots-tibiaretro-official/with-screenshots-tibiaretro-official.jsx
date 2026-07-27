import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-official');
}

export default function WithScreenshotsTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-official" />;
}
