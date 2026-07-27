import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-server');
}

export default function WithScreenshotsArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-server" />;
}
