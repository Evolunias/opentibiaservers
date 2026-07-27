import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-guide');
}

export default function WithScreenshotsRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-guide" />;
}
