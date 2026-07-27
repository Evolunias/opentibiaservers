import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-pvpe-server');
}

export default function Xanteria86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-pvpe-server" />;
}
