import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-ot-server');
}

export default function WithScreenshotsThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-ot-server" />;
}
