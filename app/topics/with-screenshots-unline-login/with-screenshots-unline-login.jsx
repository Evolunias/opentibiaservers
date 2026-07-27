import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-login');
}

export default function WithScreenshotsUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-login" />;
}
