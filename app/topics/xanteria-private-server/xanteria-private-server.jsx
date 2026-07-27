import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-private-server');
}

export default function XanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-private-server" />;
}
