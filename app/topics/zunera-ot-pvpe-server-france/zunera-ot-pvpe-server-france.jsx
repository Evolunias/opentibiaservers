import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-france');
}

export default function ZuneraOtPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-france" />;
}
