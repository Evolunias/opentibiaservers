import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-uk');
}

export default function WithScreenshotsGuideUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-uk" />;
}
