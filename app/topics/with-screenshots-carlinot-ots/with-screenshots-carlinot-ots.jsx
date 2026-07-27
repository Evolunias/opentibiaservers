import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-ots');
}

export default function WithScreenshotsCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-ots" />;
}
