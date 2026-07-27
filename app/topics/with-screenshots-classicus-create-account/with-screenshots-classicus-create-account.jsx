import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-create-account');
}

export default function WithScreenshotsClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-create-account" />;
}
