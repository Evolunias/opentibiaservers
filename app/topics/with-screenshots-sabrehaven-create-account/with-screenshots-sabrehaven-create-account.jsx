import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-create-account');
}

export default function WithScreenshotsSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-create-account" />;
}
