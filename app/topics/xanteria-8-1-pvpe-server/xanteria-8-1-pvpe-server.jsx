import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-pvpe-server');
}

export default function Xanteria81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-pvpe-server" />;
}
