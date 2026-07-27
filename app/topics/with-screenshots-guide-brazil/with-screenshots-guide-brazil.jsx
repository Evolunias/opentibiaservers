import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-brazil');
}

export default function WithScreenshotsGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-brazil" />;
}
