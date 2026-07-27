import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-create-account');
}

export default function WithScreenshotsArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-create-account" />;
}
