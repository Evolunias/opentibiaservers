import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-create-account');
}

export default function WithScreenshotsMediviaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-create-account" />;
}
