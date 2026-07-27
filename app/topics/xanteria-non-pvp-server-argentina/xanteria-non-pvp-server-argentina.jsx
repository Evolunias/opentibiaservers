import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-argentina');
}

export default function XanteriaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-argentina" />;
}
