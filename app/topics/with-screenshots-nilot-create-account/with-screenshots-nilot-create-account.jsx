import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-create-account');
}

export default function WithScreenshotsNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-create-account" />;
}
