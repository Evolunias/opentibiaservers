import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-login');
}

export default function WithScreenshotsKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-login" />;
}
