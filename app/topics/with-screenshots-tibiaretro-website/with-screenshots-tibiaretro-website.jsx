import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-website');
}

export default function WithScreenshotsTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-website" />;
}
