import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-argentina');
}

export default function YurotsNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-argentina" />;
}
