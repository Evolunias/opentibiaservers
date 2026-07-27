import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-tibia');
}

export default function WithScreenshotsMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-tibia" />;
}
