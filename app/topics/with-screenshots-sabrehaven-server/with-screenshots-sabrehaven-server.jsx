import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-server');
}

export default function WithScreenshotsSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-server" />;
}
