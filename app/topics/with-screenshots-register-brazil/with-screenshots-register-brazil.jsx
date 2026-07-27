import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-brazil');
}

export default function WithScreenshotsRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-brazil" />;
}
