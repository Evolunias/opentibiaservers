import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-mexico');
}

export default function WithScreenshotsGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-mexico" />;
}
