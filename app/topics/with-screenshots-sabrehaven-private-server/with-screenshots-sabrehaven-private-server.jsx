import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-private-server');
}

export default function WithScreenshotsSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-private-server" />;
}
