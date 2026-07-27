import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-create-account');
}

export default function WithScreenshotsAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-create-account" />;
}
