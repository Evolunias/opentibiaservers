import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-france');
}

export default function ZezeniaOnlinePvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-france" />;
}
