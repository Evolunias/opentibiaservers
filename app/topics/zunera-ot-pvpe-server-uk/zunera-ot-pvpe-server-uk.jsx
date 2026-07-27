import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-uk');
}

export default function ZuneraOtPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-uk" />;
}
