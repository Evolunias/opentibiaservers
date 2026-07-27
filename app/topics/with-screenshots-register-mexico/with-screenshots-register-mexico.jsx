import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-mexico');
}

export default function WithScreenshotsRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-mexico" />;
}
