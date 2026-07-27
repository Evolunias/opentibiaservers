import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-server');
}

export default function WithScreenshotsNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-server" />;
}
