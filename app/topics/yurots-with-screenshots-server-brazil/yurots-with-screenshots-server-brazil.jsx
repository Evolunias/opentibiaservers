import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-brazil');
}

export default function YurotsWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-brazil" />;
}
