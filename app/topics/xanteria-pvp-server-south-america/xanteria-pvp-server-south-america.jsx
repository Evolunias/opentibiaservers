import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-south-america');
}

export default function XanteriaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-south-america" />;
}
