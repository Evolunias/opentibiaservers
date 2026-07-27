import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-ot-server');
}

export default function WithScreenshotsKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-ot-server" />;
}
