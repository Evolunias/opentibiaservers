import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-guide');
}

export default function WithScreenshotsAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-guide" />;
}
