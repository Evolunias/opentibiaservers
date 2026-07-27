import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-sweden');
}

export default function WithScreenshotsRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-sweden" />;
}
