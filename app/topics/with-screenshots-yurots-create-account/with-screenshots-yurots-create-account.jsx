import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-create-account');
}

export default function WithScreenshotsYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-create-account" />;
}
