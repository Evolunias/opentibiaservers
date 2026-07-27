import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-create-account');
}

export default function WithScreenshotsTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-create-account" />;
}
