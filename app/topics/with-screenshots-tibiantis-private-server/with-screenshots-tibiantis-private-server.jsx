import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-private-server');
}

export default function WithScreenshotsTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-private-server" />;
}
