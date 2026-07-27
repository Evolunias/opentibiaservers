import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-pvpe-server');
}

export default function Xanteria96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-pvpe-server" />;
}
