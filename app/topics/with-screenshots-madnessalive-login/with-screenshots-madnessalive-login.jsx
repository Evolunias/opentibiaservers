import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-login');
}

export default function WithScreenshotsMadnessaliveLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-login" />;
}
