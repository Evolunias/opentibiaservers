import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-ots');
}

export default function WithScreenshotsRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-ots" />;
}
