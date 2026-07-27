import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-ots');
}

export default function WithScreenshotsEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-ots" />;
}
