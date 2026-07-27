import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-create-account');
}

export default function WithScreenshotsThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-create-account" />;
}
