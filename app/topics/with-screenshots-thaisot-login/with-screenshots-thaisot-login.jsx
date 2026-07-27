import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-login');
}

export default function WithScreenshotsThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-login" />;
}
