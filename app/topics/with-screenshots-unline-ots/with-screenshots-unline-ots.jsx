import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-ots');
}

export default function WithScreenshotsUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-ots" />;
}
