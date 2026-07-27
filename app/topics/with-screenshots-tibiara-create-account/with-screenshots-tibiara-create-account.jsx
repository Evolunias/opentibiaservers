import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-create-account');
}

export default function WithScreenshotsTibiaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-create-account" />;
}
