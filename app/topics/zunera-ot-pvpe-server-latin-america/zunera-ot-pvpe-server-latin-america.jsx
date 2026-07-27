import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-latin-america');
}

export default function ZuneraOtPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-latin-america" />;
}
