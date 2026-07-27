import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-create-account');
}

export default function WithScreenshotsBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-create-account" />;
}
