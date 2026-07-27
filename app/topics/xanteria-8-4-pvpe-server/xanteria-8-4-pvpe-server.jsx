import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-pvpe-server');
}

export default function Xanteria84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-pvpe-server" />;
}
