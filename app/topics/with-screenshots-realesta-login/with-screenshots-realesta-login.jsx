import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-login');
}

export default function WithScreenshotsRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-login" />;
}
