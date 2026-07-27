import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-create-account');
}

export default function WithScreenshotsTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-create-account" />;
}
