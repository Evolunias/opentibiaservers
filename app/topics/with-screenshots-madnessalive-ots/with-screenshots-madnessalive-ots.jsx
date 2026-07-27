import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-ots');
}

export default function WithScreenshotsMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-ots" />;
}
