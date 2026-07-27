import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-login');
}

export default function WithScreenshotsArchlightLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-login" />;
}
