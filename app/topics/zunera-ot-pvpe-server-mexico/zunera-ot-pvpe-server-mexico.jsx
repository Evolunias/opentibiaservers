import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-mexico');
}

export default function ZuneraOtPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-mexico" />;
}
