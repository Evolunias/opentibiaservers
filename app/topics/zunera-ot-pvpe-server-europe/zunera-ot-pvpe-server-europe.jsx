import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvpe-server-europe');
}

export default function ZuneraOtPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvpe-server-europe" />;
}
