import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-guide');
}

export default function WithScreenshotsEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-guide" />;
}
