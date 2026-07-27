import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-argentina');
}

export default function XanteriaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-argentina" />;
}
