import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-client');
}

export default function WithScreenshotsArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-client" />;
}
