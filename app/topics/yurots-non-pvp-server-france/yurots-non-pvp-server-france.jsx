import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-france');
}

export default function YurotsNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-france" />;
}
