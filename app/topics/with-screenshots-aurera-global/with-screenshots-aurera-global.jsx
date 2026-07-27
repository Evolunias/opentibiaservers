import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global');
}

export default function WithScreenshotsAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global" />;
}
