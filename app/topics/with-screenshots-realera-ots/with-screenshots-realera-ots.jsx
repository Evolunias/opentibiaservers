import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-ots');
}

export default function WithScreenshotsRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-ots" />;
}
