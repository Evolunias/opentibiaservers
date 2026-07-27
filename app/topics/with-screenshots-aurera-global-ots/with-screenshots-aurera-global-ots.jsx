import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-ots');
}

export default function WithScreenshotsAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-ots" />;
}
