import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-pvp-server');
}

export default function Xanteria81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-pvp-server" />;
}
