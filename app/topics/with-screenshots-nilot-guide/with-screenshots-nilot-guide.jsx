import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-guide');
}

export default function WithScreenshotsNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-guide" />;
}
