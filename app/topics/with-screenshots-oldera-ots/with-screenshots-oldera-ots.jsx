import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-ots');
}

export default function WithScreenshotsOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-ots" />;
}
