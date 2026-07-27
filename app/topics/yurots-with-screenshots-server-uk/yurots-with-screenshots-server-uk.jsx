import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-uk');
}

export default function YurotsWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-uk" />;
}
