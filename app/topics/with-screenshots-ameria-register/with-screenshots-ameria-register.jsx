import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-register');
}

export default function WithScreenshotsAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-register" />;
}
