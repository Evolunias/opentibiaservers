import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-login');
}

export default function WithScreenshotsNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-login" />;
}
