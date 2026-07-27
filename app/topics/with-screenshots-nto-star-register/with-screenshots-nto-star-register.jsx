import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-register');
}

export default function WithScreenshotsNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-register" />;
}
