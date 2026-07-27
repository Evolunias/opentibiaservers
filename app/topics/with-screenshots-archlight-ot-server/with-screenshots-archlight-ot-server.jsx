import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-ot-server');
}

export default function WithScreenshotsArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-ot-server" />;
}
