import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-client');
}

export default function WithScreenshotsTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-client" />;
}
