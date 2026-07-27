import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-usa');
}

export default function WithScreenshotsRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-usa" />;
}
