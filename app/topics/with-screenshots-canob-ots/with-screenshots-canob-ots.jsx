import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-ots');
}

export default function WithScreenshotsCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-ots" />;
}
