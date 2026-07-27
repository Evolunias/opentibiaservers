import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-register');
}

export default function WithScreenshotsClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-register" />;
}
