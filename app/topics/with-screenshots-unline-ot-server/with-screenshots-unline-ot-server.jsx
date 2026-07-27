import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-ot-server');
}

export default function WithScreenshotsUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-ot-server" />;
}
