import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-north-america');
}

export default function YurotsNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-north-america" />;
}
