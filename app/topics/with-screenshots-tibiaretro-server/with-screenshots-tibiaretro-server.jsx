import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-server');
}

export default function WithScreenshotsTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-server" />;
}
