import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-register');
}

export default function WithScreenshotsKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-register" />;
}
