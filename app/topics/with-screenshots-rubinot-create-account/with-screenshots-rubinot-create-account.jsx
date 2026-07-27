import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-create-account');
}

export default function WithScreenshotsRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-create-account" />;
}
