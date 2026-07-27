import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-official');
}

export default function WithScreenshotsMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-official" />;
}
