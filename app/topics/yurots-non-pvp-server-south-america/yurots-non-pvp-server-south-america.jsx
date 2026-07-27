import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-south-america');
}

export default function YurotsNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-south-america" />;
}
