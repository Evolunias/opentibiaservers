import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera');
}

export default function WithScreenshotsEvoleraKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera" />;
}
