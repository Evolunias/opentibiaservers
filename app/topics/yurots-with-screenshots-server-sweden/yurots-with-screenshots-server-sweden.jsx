import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-screenshots-server-sweden');
}

export default function YurotsWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-screenshots-server-sweden" />;
}
