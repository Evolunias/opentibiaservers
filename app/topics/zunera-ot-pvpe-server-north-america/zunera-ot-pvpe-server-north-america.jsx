import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-north-america');
}

export default function ZuneraOtPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-north-america" />;
}
