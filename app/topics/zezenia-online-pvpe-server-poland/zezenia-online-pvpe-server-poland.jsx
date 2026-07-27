import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-poland');
}

export default function ZezeniaOnlinePvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-poland" />;
}
