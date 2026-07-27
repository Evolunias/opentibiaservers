import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-non-pvp-server');
}

export default function Xanteria1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-non-pvp-server" />;
}
