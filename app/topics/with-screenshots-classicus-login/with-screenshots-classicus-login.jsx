import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-login');
}

export default function WithScreenshotsClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-login" />;
}
