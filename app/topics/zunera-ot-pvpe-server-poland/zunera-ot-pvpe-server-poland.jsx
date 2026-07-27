import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-poland');
}

export default function ZuneraOtPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-poland" />;
}
