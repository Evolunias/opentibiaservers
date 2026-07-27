import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-1-pvpe-server');
}

export default function ZuneraOt71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-1-pvpe-server" />;
}
