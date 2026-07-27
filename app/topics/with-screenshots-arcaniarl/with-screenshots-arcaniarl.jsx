import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl');
}

export default function WithScreenshotsArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl" />;
}
