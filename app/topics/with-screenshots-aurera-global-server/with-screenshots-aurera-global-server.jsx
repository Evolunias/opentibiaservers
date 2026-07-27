import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-server');
}

export default function WithScreenshotsAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-server" />;
}
