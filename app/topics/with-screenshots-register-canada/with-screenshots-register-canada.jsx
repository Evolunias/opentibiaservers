import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-canada');
}

export default function WithScreenshotsRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-canada" />;
}
