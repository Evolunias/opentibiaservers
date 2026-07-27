import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-uk');
}

export default function ZezeniaOnlinePvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-uk" />;
}
