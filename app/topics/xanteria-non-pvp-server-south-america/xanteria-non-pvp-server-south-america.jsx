import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-south-america');
}

export default function XanteriaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-south-america" />;
}
