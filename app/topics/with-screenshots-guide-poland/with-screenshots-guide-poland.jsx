import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-poland');
}

export default function WithScreenshotsGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-poland" />;
}
