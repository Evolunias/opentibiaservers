import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-guide');
}

export default function WithScreenshotsArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-guide" />;
}
