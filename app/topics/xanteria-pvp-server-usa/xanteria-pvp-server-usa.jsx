import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-usa');
}

export default function XanteriaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-usa" />;
}
