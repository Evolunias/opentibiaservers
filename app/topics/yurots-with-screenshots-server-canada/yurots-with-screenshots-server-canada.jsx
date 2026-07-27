import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-canada');
}

export default function YurotsWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-canada" />;
}
