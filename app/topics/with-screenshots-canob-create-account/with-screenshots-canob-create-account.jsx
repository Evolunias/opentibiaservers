import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-create-account');
}

export default function WithScreenshotsCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-create-account" />;
}
