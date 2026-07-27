import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-client');
}

export default function WithScreenshotsTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-client" />;
}
