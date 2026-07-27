import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-create-account');
}

export default function WithScreenshotsMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-create-account" />;
}
