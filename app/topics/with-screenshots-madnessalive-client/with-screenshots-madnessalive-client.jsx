import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-client');
}

export default function WithScreenshotsMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-client" />;
}
