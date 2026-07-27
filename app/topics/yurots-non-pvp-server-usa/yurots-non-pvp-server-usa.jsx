import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-usa');
}

export default function YurotsNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-usa" />;
}
