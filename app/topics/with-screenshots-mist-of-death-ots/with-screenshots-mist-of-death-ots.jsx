import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-ots');
}

export default function WithScreenshotsMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-ots" />;
}
