import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-europe');
}

export default function YurotsWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-europe" />;
}
