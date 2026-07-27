import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-register');
}

export default function WithScreenshotsCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-register" />;
}
