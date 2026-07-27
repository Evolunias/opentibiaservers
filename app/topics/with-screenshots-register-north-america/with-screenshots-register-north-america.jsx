import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-north-america');
}

export default function WithScreenshotsRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-north-america" />;
}
