import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-login');
}

export default function WithScreenshotsImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-login" />;
}
