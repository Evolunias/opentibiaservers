import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-pvpe-server');
}

export default function ZuneraOt15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-pvpe-server" />;
}
