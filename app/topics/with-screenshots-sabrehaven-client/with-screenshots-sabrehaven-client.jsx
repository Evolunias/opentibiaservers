import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-client');
}

export default function WithScreenshotsSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-client" />;
}
