import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-register-germany');
}

export default function WithScreenshotsRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-register-germany" />;
}
