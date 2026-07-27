import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-pvp-server');
}

export default function Xanteria84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-pvp-server" />;
}
