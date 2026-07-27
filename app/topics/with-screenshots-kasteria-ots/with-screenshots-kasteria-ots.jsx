import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-ots');
}

export default function WithScreenshotsKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-ots" />;
}
