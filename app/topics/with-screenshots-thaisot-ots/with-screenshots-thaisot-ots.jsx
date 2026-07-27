import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-ots');
}

export default function WithScreenshotsThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-ots" />;
}
