import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-server');
}

export default function WithScreenshotsMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-server" />;
}
