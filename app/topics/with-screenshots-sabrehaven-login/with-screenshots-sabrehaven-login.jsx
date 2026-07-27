import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-login');
}

export default function WithScreenshotsSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-login" />;
}
