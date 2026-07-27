import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-register');
}

export default function WithScreenshotsThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-register" />;
}
