import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eternal-odyssey');
}

export default function WithScreenshotsEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eternal-odyssey" />;
}
