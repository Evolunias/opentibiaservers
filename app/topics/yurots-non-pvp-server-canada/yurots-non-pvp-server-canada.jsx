import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-canada');
}

export default function YurotsNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-canada" />;
}
