import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-register');
}

export default function WithScreenshotsUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-register" />;
}
