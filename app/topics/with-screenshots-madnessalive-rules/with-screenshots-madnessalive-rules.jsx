import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-rules');
}

export default function WithScreenshotsMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-rules" />;
}
