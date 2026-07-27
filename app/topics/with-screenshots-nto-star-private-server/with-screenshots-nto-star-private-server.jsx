import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-private-server');
}

export default function WithScreenshotsNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-private-server" />;
}
