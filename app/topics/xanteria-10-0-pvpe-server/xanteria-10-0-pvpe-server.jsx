import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-pvpe-server');
}

export default function Xanteria100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-pvpe-server" />;
}
