import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-private-server');
}

export default function WithScreenshotsElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-private-server" />;
}
