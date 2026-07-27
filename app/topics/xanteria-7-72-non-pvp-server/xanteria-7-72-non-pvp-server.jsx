import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-non-pvp-server');
}

export default function Xanteria772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-non-pvp-server" />;
}
