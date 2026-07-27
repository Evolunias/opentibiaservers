import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-server');
}

export default function WithScreenshotsArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-server" />;
}
