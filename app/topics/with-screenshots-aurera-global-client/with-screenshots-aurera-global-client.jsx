import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-client');
}

export default function WithScreenshotsAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-client" />;
}
