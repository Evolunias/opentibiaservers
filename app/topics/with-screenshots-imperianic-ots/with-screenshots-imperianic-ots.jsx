import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-ots');
}

export default function WithScreenshotsImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-ots" />;
}
