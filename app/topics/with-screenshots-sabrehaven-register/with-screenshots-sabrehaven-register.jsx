import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-register');
}

export default function WithScreenshotsSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-register" />;
}
