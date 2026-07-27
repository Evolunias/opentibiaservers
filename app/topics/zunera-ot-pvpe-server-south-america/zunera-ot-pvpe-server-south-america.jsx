import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-south-america');
}

export default function ZuneraOtPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-south-america" />;
}
