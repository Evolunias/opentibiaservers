import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-private-server');
}

export default function WithScreenshotsTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-private-server" />;
}
