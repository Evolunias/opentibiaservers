import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-ots');
}

export default function WithScreenshotsClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-ots" />;
}
