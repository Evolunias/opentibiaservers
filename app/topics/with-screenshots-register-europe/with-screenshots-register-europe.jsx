import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-europe');
}

export default function WithScreenshotsRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-europe" />;
}
