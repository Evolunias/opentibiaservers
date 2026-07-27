import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-create-account');
}

export default function WithScreenshotsUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-create-account" />;
}
