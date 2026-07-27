import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-register');
}

export default function WithScreenshotsRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-register" />;
}
