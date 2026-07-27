import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-pvp-server');
}

export default function Xanteria76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-pvp-server" />;
}
