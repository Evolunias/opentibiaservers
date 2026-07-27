import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-register');
}

export default function WithScreenshotsMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-register" />;
}
