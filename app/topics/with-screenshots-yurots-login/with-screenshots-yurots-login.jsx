import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-login');
}

export default function WithScreenshotsYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-login" />;
}
