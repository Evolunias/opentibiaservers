import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-server');
}

export default function WithScreenshotsClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-server" />;
}
