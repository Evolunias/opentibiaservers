import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-private-server');
}

export default function WithScreenshotsOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-private-server" />;
}
