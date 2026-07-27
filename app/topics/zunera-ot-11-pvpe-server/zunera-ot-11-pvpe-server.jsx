import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-pvpe-server');
}

export default function ZuneraOt11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-pvpe-server" />;
}
