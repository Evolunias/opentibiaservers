import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-pvpe-server');
}

export default function Xanteria76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-pvpe-server" />;
}
