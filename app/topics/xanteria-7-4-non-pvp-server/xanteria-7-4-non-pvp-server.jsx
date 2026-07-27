import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-non-pvp-server');
}

export default function Xanteria74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-non-pvp-server" />;
}
