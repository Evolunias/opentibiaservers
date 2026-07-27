import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-uk');
}

export default function WithScreenshotsRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-uk" />;
}
