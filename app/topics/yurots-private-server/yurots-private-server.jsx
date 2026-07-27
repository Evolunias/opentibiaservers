import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-private-server');
}

export default function YurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-private-server" />;
}
