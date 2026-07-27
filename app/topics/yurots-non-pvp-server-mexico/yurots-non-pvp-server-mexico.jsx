import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-mexico');
}

export default function YurotsNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-mexico" />;
}
