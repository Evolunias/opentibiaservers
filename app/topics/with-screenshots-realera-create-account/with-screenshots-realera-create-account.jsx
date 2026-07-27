import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-create-account');
}

export default function WithScreenshotsRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-create-account" />;
}
